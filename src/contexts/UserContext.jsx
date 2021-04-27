import { createContext, useContext, useState } from 'react';


export const UserContext = createContext('');

export function UserContextProvider({ children }){
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(UserContext);
}