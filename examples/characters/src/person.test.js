import { describe, it, expect } from 'vitest';
import { Person } from './person.js';

// Remove the `todo` from the `describe` to run the tests.
describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Grace', 'Hopper');
  });
  // This test will fail. Why?
  it('should create a person with a first name and last name', () => {
    expect(person).toEqual({
      id: expect.stringContaining('person-'),
      firstName: 'Grace',
      lastName: 'Hopper',
    });
  });
});
