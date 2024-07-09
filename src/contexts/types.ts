import { ReactElement } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  billCount: number;
  totalDue: number;
}

interface UserContextType {
  userData?: User;
  loading: boolean;
  error: boolean;
}

interface UserProviderProps {
  children: ReactElement;
}

export type { User, UserContextType, UserProviderProps };
