// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  // Mock a GET request to /api/user
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: '123', name: 'John Doe' }));
  }),
  // Mock a POST request to /api/login
  rest.post('/api/login', (req, res, ctx) => {
    const { username } = req.body;
    return res(ctx.status(200), ctx.json({ message: `Welcome, ${username}!` }));
  }),
];
