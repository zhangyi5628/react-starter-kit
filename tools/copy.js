/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import gaze from 'gaze';
import Promise from 'bluebird';
import fs from './lib/fs';
import pkg from '../package.json';
/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({ watch } = {}) {
  const ncp = Promise.promisify(require('ncp'));

  await Promise.all([
    ncp('src/public', 'build/public'),
    ncp('src/content', 'build/content'),
    ncp('scripts', 'build/scripts'),
  ]);

  await fs.writeFile('./build/package.json', JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    optionalDependencies: pkg.optionalDependencies,
    scripts: {
      start: 'node server.js',
      init_gyp: "bash ./scripts/load_node_gyp.bash;",
      install_db: "npm install sqlite3 --build-from-source",
      preinstall: "npm run init_gyp & npm run install_db",
    },
  }, null, 2));

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze('src/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
    });

    const cp = async (file) => {
      const relPath = file.substr(path.join(__dirname, '../src/content/').length);
      await ncp(`src/content/${relPath}`, `build/content/${relPath}`);
    };

    watcher.on('changed', cp);
    watcher.on('added', cp);
  }
}

export default copy;
