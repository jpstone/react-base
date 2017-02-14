const tape = require('tape');
const services = require('./container.service');

tape('container service', (test) => {
  test.equal(services.displayText('testing!'), 'testing!', 'displayText should return argument');
  test.end();
});
