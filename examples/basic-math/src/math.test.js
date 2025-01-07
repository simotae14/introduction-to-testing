import { expect, test, vi } from 'vitest';
import * as math from './arithmetic';

test('calls add with the correct arguments', () => {
  // create a spy for the add function
  // Arrange
  const addSpy = vi.spyOn(math, 'add');

  // Act
  const result = math.add(2, 3);

  // Assert
  expect(addSpy).toHaveBeenCalledWith(2, 3);
  expect(result).toBe(5);

  // Clean up
  addSpy.mockRestore();
});
