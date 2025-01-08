import { describe, it, vi, expect } from 'vitest';

// Mock the current date to always return a specific date
const mockDate = new Date(2024, 1, 1);
vi.setSystemTime(mockDate);

describe('mocked Date', () => {
  it('should return the mocked date', () => {
    const currentDate = new Date();
    expect(currentDate).toEqual(mockDate);
  });
});
