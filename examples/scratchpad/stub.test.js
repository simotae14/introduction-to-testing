import { describe, it, vi } from 'vitest';

// Create a Stub to simulate an API response
const fetchStub = vi.fn(() =>
  Promise.resolve({ band: 'Green Day', venue: 'Madison Square Garden' }),
);

describe('Stub', () => {
  it('should return the expected data', async () => {});
});
