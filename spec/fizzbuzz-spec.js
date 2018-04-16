// fizzbuzz-spec.js
'use strict'
const fizzbuzz = require('../src/fizzbuzz.js')

describe('Function fizzbuzz(), runs fizzbuzz on a range of numbers', () => {
  it ('is a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });

  it ('does not change the number 2', () => {
    expect(fizzbuzz(2)).toEqual(2);
  });

  it('replaces multiples of 3 and 5 with FizzBuzz', () => {
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
  });

  it('replaces multiples of 5 with Buzz', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });

  it('replaces multiples of 3 with Fizz', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });
});
