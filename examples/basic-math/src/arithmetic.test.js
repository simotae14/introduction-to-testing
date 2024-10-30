import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should get real angry if you give it a first argument that cannot be parsed into a number', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });

  it('should get real angry if you give it a second argument that cannot be parsed into a number', () => {
    expect(() => add(2, 'potato')).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

describe.todo('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
});
