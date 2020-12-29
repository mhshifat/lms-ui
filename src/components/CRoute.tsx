import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks";

const CRoute: React.FC<{ type: "common" | "public" | "private" }> = ({
  type,
  ...restProps
}) => {
  const { isLoggedIn, isProcessing } = useAuth();

  if (isProcessing) return null;

  if (type === "common") {
    return <Route {...restProps} />;
  }
  if (type === "public") {
    return isLoggedIn ? <Redirect to="/" /> : <Route {...restProps} />;
  }
  if (type === "private") {
    return isLoggedIn ? <Route {...restProps} /> : <Redirect to="/login" />;
  }
  return null;
};

export default CRoute;
