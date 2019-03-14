import { createElement, StyleSheet } from 'react';
import React from 'react';

const createIconComponent = ({
  content,
  height,
  width
}) => props => createElement('svg', { ...props,
  viewBox: `0 0 ${width} ${height}`
}, content);

export default createIconComponent;