import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
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
