import React, { createContext, useState } from 'react';
import {
  getFollowers, getFollowing, getRepos, getUser,
} from '../services/api';

export const UserContext = createContext('');

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [userId, setUserId] = useState(null);

  const loadData = async (id) => {
    const followersList = await getFollowers(id);
    const followingList = await getFollowing(id);
    const reposList = await getRepos(id);
    const userInfo = await getUser(id);

    setUser(userInfo);
    setRepos(reposList);
    setFollowers(followersList);
    setFollowing(followingList);
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        user,
        repos,
        followers,
        following,
        setUserId,
        setUser,
        setRepos,
        setFollowers,
        setFollowing,
        loadData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
