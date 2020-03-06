var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 5);
  })

  it('can subtract', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 3);
  })

  it('can multiply', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 15);
  })

  it('can divide', function() {
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 3);
  })

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 12345678);
  })

  it('can chain multiple operations together', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 1);
  })

  it('can clear the running total without affecting the calculation', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(calculator.previousTotal, 10);
    assert.equal(calculator.runningTotal, 0);
  })

});
