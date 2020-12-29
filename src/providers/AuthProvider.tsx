import React, { createContext, useState } from "react";
import { END_POINTS } from "../constants/index";
import { useFetch } from "../hooks";
import { UserPayload } from "../types/auth";
import { APISuccessResponse } from "../types/fetch";

interface AuthContextProps {
  isLoggedIn: boolean;
  isProcessing: boolean;
  userPayload: UserPayload | null;
  setUserPayload: React.Dispatch<React.SetStateAction<UserPayload | null>>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [userPayload, setUserPayload] = useState<UserPayload | null>(null);
  useFetch<APISuccessResponse<{ userPayload: UserPayload }>>(
    END_POINTS.AUTH.TOKEN_LOGIN,
    {
      method: "POST",
      body: { token: localStorage?.tid || "" },
      onCompleted: (data) => {
        setUserPayload(data.data.userPayload);
        setIsProcessing(false);
      },
      onError: () => {
        setIsProcessing(false);
      },
    }
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!userPayload,
        isProcessing,
        userPayload,
        setUserPayload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
