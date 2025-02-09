// UserProfile.jsx
import React, { useEffect, useState } from 'react';

export function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => {
        if (!res.ok) throw 'Failed to load the user';
        return res.json();
      })
      .then(setUser)
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading…</div>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
