import { render, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it.only('should trigger an alert', async () => {
    const handleSubmit = vi.fn();

    render(<AlertButton onSubmit={handleSubmit} message="Default Message" />);

    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    // fill the message and hit the button
    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });

    // Look and see if alert() was called with the message
    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith('Hello');
  });
});
