import React from "react";
import { Switch } from "react-router-dom";
import { CRoute } from "../components";
import { routes } from "./routes";

const Routes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <CRoute key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
