import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { http } from 'msw';
import { server } from './mocks/server';
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

test('handles server error', async () => {
  // Override the default handler for this test
  server.use(
    http.get('/api/user', () => {
      return new Response(null, { status: 500 });
    }),
  );

  render(<UserProfile />);

  // Wait for error message
  const errorMessage = await screen.findByText('Failed to load the user');
  expect(errorMessage).toBeInTheDocument();
});
