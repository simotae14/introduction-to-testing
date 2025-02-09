// UserProfile.jsx
import React, { useEffect, useState } from 'react';

export function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        return setUser(data);
      });
  }, []);

  if (!user) return <div>Loading…</div>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
