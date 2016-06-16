import React, {Component, PropTypes} from 'react';
// https://github.com/facebook/react/blob/master/src/renderers/dom/client/ReactMount.js#L390-L401
import {unmountComponentAtNode, findDOMNode} from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Protal from '../Protal'
import s from './Mask.css';

function Mask({active}) {

  const mask = active ? <div className={s.backdrop}>sdfg</div> : '';

  return <Protal>{mask}</Protal>
}

export default withStyles(s)(Mask);
