import { vi, expect, test } from 'vitest';

test('combine mock and spy', () => {
  // Create a mock and spy on one of its methods
  const mockObject = {
    method: vi.fn().mockReturnValue('Mocked result'),
  };

  // Spy on the method
  const spy = vi.spyOn(mockObject, 'method');

  mockObject.method('argument');

  // Verify the interaction
  expect(spy).toHaveBeenCalledWith('argument');
  expect(spy).toHaveReturnedWith('Mocked result');
});
