import { test, expect } from 'vitest';
import { formatUser } from './formatter';

test('formats user information correctly', () => {
  const user = { name: 'Alice', age: 30 };
  const formattedUser = formatUser(user);
  expect(formattedUser).toMatchInlineSnapshot(`"User: Alice, Age: 30"`);
});
