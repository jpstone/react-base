const React = require('react');
const service = require('./container.service');

function Container() {
  return <div className="container">{service.displayText('Hello, world!')}</div>;
}

module.exports = Container;
