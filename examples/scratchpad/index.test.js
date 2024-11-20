import { test, expect } from 'vitest';

test('a super simple test', () => {
  expect(true).toBe(true);
});

test('a super simple test passing even if it is a wrong assertion', () => {
  setTimeout(() => {
    expect(true).toBe(false);
  }, 1000);
});
