import React, { createContext, useState } from 'react';

export const UserContext = createContext('');

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        repos,
        setUser,
        setRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
