const React = require('react');
const ReactDOM = require('react-dom');
const Container = require('./components/container/container');

require('babel-polyfill');

ReactDOM.render(
  <Container />,
  document.getElementById('app'),
);
