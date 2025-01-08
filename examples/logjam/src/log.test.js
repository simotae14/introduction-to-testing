import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

vi.mock('./send-to-server', () => {
  return {
    sendToServer: vi.fn(),
  };
});

import { sendToServer } from './send-to-server';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      // stub the Mode dev
      vi.stubEnv('MODE', 'development');
    });

    afterEach(() => {
      // restore the original value of the MODE environment variable
      vi.restoreAllMocks();
    });

    it('logs to the console in development mode', () => {
      // Spy on console.log
      const logSpy = vi.spyOn(console, 'log');

      // Call the log function
      log('Hello, world!');

      // Verify the spy was called with the correct argument
      expect(logSpy).toHaveBeenCalledWith('Hello, world!');
    });
  });

  describe('production', () => {
    beforeEach(() => {
      // stub the Mode prod
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      // restore the original value of the MODE environment variable
      vi.restoreAllMocks();
    });

    it('does not log to the console in production mode', () => {
      // Spy on console.log
      const logSpy = vi.spyOn(console, 'log');

      // Call the log function
      log('Hello, world!');

      expect(logSpy).not.toHaveBeenCalled();

      expect(sendToServer).toHaveBeenCalled();
    });
  });
});
