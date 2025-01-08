import { describe, it, vi, expect } from 'vitest';
import * as fs from 'fs';

// Code under test
function readConfigFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

describe('readConfigFile', () => {
  // Mock the fs module
  vi.mock('fs');

  it('should read the mocked config file', () => {
    // Mock the fs.readFileSync method
    vi.spyOn(fs, 'readFileSync').mockReturnValue('mocked file content');

    // Call the function under test
    const result = readConfigFile('/path/to/config');

    // Assert the returned file content
    expect(result).toBe('mocked file content');
  });
});
