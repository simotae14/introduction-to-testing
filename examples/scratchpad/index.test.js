import { test, expect, vi } from 'vitest';

test('a super simple test', () => {
  expect(true).toBe(true);
});

test('a super simple test passing even if it is a wrong assertion', () => {
  setTimeout(() => {
    expect(true).toBe(false);
  }, 1000);
});

const logSpy = vi.spyOn(console, 'log');

test('a super simple test with a spy', () => {
  console.log('Hello, World!');
  expect(logSpy).toBeCalled();
  expect(logSpy).toBeCalledWith('Hello, World!');
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toHaveBeenCalledTimes(1);
});

test('a super simple test with a mock', () => {
  const mockFn = vi.fn();
  mockFn('Hello, World!');

  expect(mockFn).toBeCalled();
  expect(mockFn).toBeCalledWith('Hello, World!');
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(1);
});
