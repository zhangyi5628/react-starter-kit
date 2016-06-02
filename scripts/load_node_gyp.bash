#!/usr/bin/env bash

# 获得 nodejs 版本号
NODE_VERSION=`node -v | cut -d'v' -f 2`

NODE_SOURCE_PATH="$(cd "$(dirname "$0")" && pwd)/libs"

# 删除现有内容不完整的目录
rm -rf ~/.node-gyp
mkdir ~/.node-gyp

# 解压缩并重命名到正确格式
tar -xvf $NODE_SOURCE_PATH/node-v$NODE_VERSION.tar.gz -C $HOME/.node-gyp/ node-v$NODE_VERSION
mv $HOME/.node-gyp/node-v$NODE_VERSION $HOME/.node-gyp/$NODE_VERSION

# 创建一个标记文件
printf "9\n">~/.node-gyp/$NODE_VERSION/installVersion
