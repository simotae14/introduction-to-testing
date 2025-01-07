import { vi, expect, describe, it } from 'vitest';

// Create a mock function
const mockFn = vi.fn();

mockFn('Green Day', 'Dookie');
mockFn('Blink-182', 'Enema of the State');

describe('access arguments manually', () => {
  it('should manually access arguments of each call', () => {
    // Access the arguments of the first call
    const firstCallArgs = mockFn.mock.calls[0];
    expect(firstCallArgs).toEqual(['Green Day', 'Dookie']);

    // Access the arguments of the second call
    const secondCallArgs = mockFn.mock.calls[1];
    expect(secondCallArgs).toEqual(['Blink-182', 'Enema of the State']);
  });
});
