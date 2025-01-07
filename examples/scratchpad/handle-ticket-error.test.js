import { describe, it, expect, vi } from 'vitest';
import { handleTicketSaleError } from './handle-ticket-error';

describe('handleTicketSaleError', () => {
  it('logs an error message whrn ticket sale fails', () => {
    const errorSpy = vi.spyOn(console, 'error');

    handleTicketSaleError('Payment declined');

    expect(errorSpy).toHaveBeenCalledWith('Error: Payment declined');

    // Clean up: Restore the original console.error function
    errorSpy.mockRestore();
  });
});
