import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { HomeContainer } from "../containers";
import { useAuth } from "../hooks";

const Home = () => {
  const history = useHistory();
  const { isLoggedIn, userPayload } = useAuth();

  if (isLoggedIn && userPayload && +userPayload?.role === 0)
    history.push("/users");
  else history.push("/books");

  return (
    <Fragment>
      <HomeContainer />
    </Fragment>
  );
};

export default Home;
