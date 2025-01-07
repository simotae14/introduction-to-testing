import { vi } from 'vitest';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { createSecretInput } from './secret-input.js';

describe('createSecretInput', async () => {
  beforeEach(() => {
    // spyOn getItem and setItem on local storage
    vi.spyOn(localStorage, 'getItem').mockReturnValue('test secret');
    vi.spyOn(localStorage, 'setItem');

    document.innerHTML = '';
    document.body.appendChild(createSecretInput());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should store the value in localStorage', async () => {
    const input = screen.getByLabelText('Secret');
    const button = screen.getByRole('button', { name: 'Store Secret' });

    await userEvent.type(input, 'my secret');
    await userEvent.click(button);

    // check the localStorage value
    expect(localStorage.getItem('secret')).toBe('my secret');
  });

  it.only('should have loaded the secret from localStorage', async () => {
    expect(screen.getByLabelText('Secret')).toHaveValue('test secret');
    expect(localStorage.getItem).toHaveBeenCalledWith('secret');
  });

  it('should save the secret to localStorage', async () => {});

  it('should clear the secret from localStorage', async () => {});
});
