import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import AuthProvider from "./AuthProvider";
import NotificationProvider from "./NotificationProvider";

const Providers: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default Providers;
