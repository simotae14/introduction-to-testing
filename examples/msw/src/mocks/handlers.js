import { http } from 'msw';

export const handlers = [
  // Mock a GET request to /api/user
  http.get('/api/user', () => {
    return Response.json({ id: '123', name: 'John Doe' }, { status: 200 });
  }),
  // Mock a POST request to /api/login
  http.post('/api/login', async ({ request }) => {
    const { username } = await request.json();
    return Response.json({ message: `Welcome, ${username}!` }, { status: 200 });
  }),
];
