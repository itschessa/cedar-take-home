import { createContext, useEffect, useState } from "react";
import { User, UserContextType, UserProviderProps } from "./types";

const UserContext = createContext<UserContextType>({
  userData: undefined,
  loading: false,
  error: false,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/user");
        if (!response.ok) {
          setHasError(true);
        }

        const user: User = await response.json();
        setUserData(user);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const contextValue = { userData, loading: isLoading, error: hasError };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext };
