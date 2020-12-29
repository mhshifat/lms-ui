import React from "react";
import { Layout, NewUserForm } from "../components";
import { Wrapper } from "../styles/newUserContainer";

const NewUserContainer = () => {
  return (
    <Layout breadcrumb="New User(s)">
      <Wrapper>
        <h1>New User(s)</h1>

        <NewUserForm />
      </Wrapper>
    </Layout>
  );
};

export default NewUserContainer;
