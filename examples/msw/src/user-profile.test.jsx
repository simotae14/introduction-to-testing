import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { UserProfile } from './user-profile';

test('renders user profile after fetching data', async () => {
  // Render the component
  render(<UserProfile />);

  // Verify loading state
  const loadingText = screen.getByText(/loading/i);
  expect(loadingText).toBeInTheDocument();

  // Wait for the user data to be displayed
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();
});
