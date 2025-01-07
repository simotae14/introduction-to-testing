import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { createSecretInput } from './secret-input.js';

describe('createSecretInput', async () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {});

  it('should store the value in localStorage', async () => {
    const secretInput = createSecretInput();

    const input = secretInput.querySelector('input');
    const button = secretInput.querySelector('button');

    input.value = 'my secret';
    button.click();

    // check the localStorage value
    expect(localStorage.getItem('secret')).toBe('my secret');
  });

  it('should have loaded the secret from localStorage', async () => {});

  it('should save the secret to localStorage', async () => {});

  it('should clear the secret from localStorage', async () => {});
});
