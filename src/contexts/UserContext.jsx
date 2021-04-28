import React, { createContext, useState } from 'react';

export const UserContext = createContext('');

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [id, setId] = useState({});

  return (
    <UserContext.Provider
      value={{
        id,
        user,
        repos,
        followers,
        following,
        setId,
        setUser,
        setRepos,
        setFollowers,
        setFollowing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
