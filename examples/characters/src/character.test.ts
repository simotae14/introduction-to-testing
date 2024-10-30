import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Simone';
const lastName = 'Taeggi';
const role = 'Warrior';

describe('Character', () => {
  let character;
  beforeEach(() => {
    character = new Character(firstName, lastName, role, 1, () => 15);
  });
  it('should create a character with a first name, last name, and role', () => {
    /* 1st solution
    expect(character.firstName).toBe(firstName);
    expect(character.lastName).toBe(lastName);
    expect(character.role).toBe(role);
    */
    /* 2nd solution
    expect(character).toEqual(
      expect.objectContaining({
        firstName,
        lastName,
        role,
      }),
    );
    */

    // 3rd solution
    expect(character).toEqual({
      id: expect.stringContaining('person-'),
      firstName,
      lastName,
      role,
      charisma: 15,
      strength: 15,
      intelligence: 15,
      wisdom: 15,
      dexterity: 15,
      constitution: 15,
      level: 1,
      lastModified: expect.any(Date),
      createdAt: expect.any(Date),
    });
  });

  it('should allow you to increase the level', () => {
    const initialLevel = character.level;

    character.levelUp();

    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const initialLastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(initialLastModified);
  });
});
