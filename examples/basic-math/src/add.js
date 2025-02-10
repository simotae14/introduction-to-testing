import { describe, it, expect } from 'vitest';

// Here's your function:
export function add(a, b) {
  return a + b;
}

// And now… here's your in-source test!
if (import.meta.vitest) {
  describe('add', () => {
    it('adds two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('handles negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });
}
