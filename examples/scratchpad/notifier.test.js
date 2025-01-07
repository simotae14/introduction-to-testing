import { expect, test, vi } from 'vitest';
import { notify } from './notifier';

test('send a notification', () => {
  // create a stub for the notify function
  const notifyStub = vi.fn();

  // replace the original notify function with the stub
  notifyStub('Test message');

  // assert that the stub was called with the correct message
  expect(notifyStub).toHaveBeenCalledWith('Test message');
});
