import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  it('logs to the console in development mode', () => {
    // Spy on console.log
    const logSpy = vi.spyOn(console, 'log');

    // Call the log function
    log('Hello, world!');

    // Verify the spy was called with the correct argument
    expect(logSpy).toHaveBeenCalledWith('Hello, world!');

    // Restore the original console.log function
    logSpy.mockRestore();
  });
});
