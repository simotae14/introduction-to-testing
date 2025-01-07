import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { createSecretInput } from './secret-input.js';

describe('createSecretInput', async () => {
  beforeEach(() => {
    document.innerHTML = '';
    document.body.appendChild(createSecretInput());
    localStorage.clear();
  });

  afterEach(() => {});

  it('should store the value in localStorage', async () => {
    const input = screen.getByLabelText('Secret');
    const button = screen.getByRole('button', { name: 'Store Secret' });

    await userEvent.type(input, 'my secret');
    await userEvent.click(button);

    // check the localStorage value
    expect(localStorage.getItem('secret')).toBe('my secret');
  });

  it('should have loaded the secret from localStorage', async () => {});

  it('should save the secret to localStorage', async () => {});

  it('should clear the secret from localStorage', async () => {});
});
