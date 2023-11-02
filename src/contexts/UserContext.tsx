import { ReactNode, createContext, useState, useEffect } from 'react';
import { User, createUserDocument, onAuthStateChangeListener } from '../utils/firebase';

interface Props {
  children: ReactNode;
}

interface UserContextProps {
  currentUser: User | null;
  setCurrentUser: (currentUser: User | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user: User | null) => {
      {user && createUserDocument(user);}
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
