var vows = require('vows')
var assert = require('assert')
var value = require('../../lib/duration/value')

vows.describe('Duration').addBatch({
  'null as parameter': function () {
    assert.equal(value(null), null)
  },
  'value from name': function () {
    assert.equal(value('long'), 4)
    assert.equal(value('double'), 2)
    assert.equal(value('whole'), 1)
    assert.equal(value('half'), 1 / 2)
    assert.equal(value('quarter'), 1 / 4)
    assert.equal(value('eighth'), 1 / 8)
    assert.equal(value('sixteenth'), 1 / 16)
    assert.equal(value('thirty-second'), 1 / 32)
  },
  'value from symbol': function () {
    assert.equal(value('l'), 4)
    assert.equal(value('l.'), 4 + 2)
    assert.equal(value('l..'), 4 + 2 + 1)
    assert.equal(value('d'), 2)
    assert.equal(value('d.'), 2 + 1)
    assert.equal(value('d..'), 2 + 1 + 1 / 2)
    assert.equal(value('w'), 1)
    assert.equal(value('w.'), 1 + 1 / 2)
    assert.equal(value('w..'), 1 + 1 / 2 + 1 / 4)
    assert.equal(value('h'), 1 / 2)
    assert.equal(value('h.'), 1 / 2 + 1 / 4)
    assert.equal(value('h..'), 1 / 2 + 1 / 4 + 1 / 8)
    assert.equal(value('q'), 1 / 4)
    assert.equal(value('q.'), 1 / 4 + 1 / 8)
    assert.equal(value('q..'), 1 / 4 + 1 / 8 + 1 / 16)
    assert.equal(value('e'), 1 / 8)
    assert.equal(value('e.'), 1 / 8 + 1 / 16)
    assert.equal(value('e..'), 1 / 8 + 1 / 16 + 1 / 32)
    assert.equal(value('s'), 1 / 16)
    assert.equal(value('s.'), 1 / 16 + 1 / 32)
    assert.equal(value('s..'), 1 / 16 + 1 / 32 + 1 / 64)
  },
  'value from number': function () {
    assert.equal(value('0.25'), 4)
    assert.equal(value('0.25.'), 4 + 2)
    assert.equal(value('0.25..'), 4 + 2 + 1)
    assert.equal(value('0.5'), 2)
    assert.equal(value('0.5.'), 2 + 1)
    assert.equal(value('0.5..'), 2 + 1 + 1 / 2)
    assert.equal(value('1'), 1)
    assert.equal(value('1.'), 1 + 1 / 2)
    assert.equal(value('1..'), 1 + 1 / 2 + 1 / 4)
    assert.equal(value('2'), 1 / 2)
    assert.equal(value('2.'), 1 / 2 + 1 / 4)
    assert.equal(value('2..'), 1 / 2 + 1 / 4 + 1 / 8)
    assert.equal(value('4'), 1 / 4)
    assert.equal(value('4.'), 1 / 4 + 1 / 8)
    assert.equal(value('4..'), 1 / 4 + 1 / 8 + 1 / 16)
    assert.equal(value('8'), 1 / 8)
    assert.equal(value('8.'), 1 / 8 + 1 / 16)
    assert.equal(value('8..'), 1 / 8 + 1 / 16 + 1 / 32)
    assert.equal(value('16'), 1 / 16)
    assert.equal(value('16.'), 1 / 16 + 1 / 32)
    assert.equal(value('16..'), 1 / 16 + 1 / 32 + 1 / 64)
  },
  'triplets': function () {
    assert.equal(value('qt'), (1 / 4 + 1 / 4) / 3)
  }
}).export(module)