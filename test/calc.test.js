'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { add, multiply } = require('../src/calc');

test('add', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('multiply', () => {
  assert.strictEqual(multiply(4, 5), 20);
});
