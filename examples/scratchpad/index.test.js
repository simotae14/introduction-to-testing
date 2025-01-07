import { test, expect, vi } from 'vitest';

test('a super simple test', () => {
  expect(true).toBe(true);
});

test('a super simple test passing even if it is a wrong assertion', () => {
  setTimeout(() => {
    expect(true).toBe(false);
  }, 1000);
});

const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('a super simple test with a spy and mock', () => {
  const result = Math.random();

  expect(result).toBe(0.5);
});
