// setupTests.js
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './src/mocks/server';

// Start the server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());
