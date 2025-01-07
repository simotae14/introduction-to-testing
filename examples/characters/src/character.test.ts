import { describe, it, expect, vi } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Simone';
const lastName = 'Taeggi';
const role = 'Warrior';

describe('Character', () => {
  let character;
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
    // firstName, lastName, role, level, rollDice
    // character = new Character(firstName, lastName, role, 1);
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
      charisma: 12,
      strength: 12,
      intelligence: 12,
      wisdom: 12,
      dexterity: 12,
      constitution: 12,
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

  it.only('should roll four six-sided die', () => {
    const rollDiceMock = vi.fn(() => 15);
    character = new Character(firstName, lastName, role, 1, rollDiceMock);

    expect(character.strength).toBe(15);
    expect(rollDiceMock).toHaveBeenCalledWith(4, 6);
    expect(rollDiceMock).toHaveBeenCalledTimes(6);

    console.log(rollDiceMock.mock.calls);
  });
});
