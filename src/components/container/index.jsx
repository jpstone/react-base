const React = require('react');
const services = require('./services');

function Container() {
  return <div className="container">{services.displayText('Hello, world!')}</div>;
}

module.exports = Container;
