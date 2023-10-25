import { ReactNode, createContext, useState, useEffect } from 'react';
import { createUserDocument, onAuthStateChangeListener } from '../utils/firebase';
import { User } from 'firebase/auth';

interface Props {
  children: ReactNode;
}

interface UserContextProps {
  currentUser: User | null;
  setCurrentUser: (currentUser: User) => void;
}

export const UserContext = createContext<UserContextProps>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user: User) => {
      {user && createUserDocument(user);}
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
