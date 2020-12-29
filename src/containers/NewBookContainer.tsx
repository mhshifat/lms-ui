import React from "react";
import { Layout, NewBookForm } from "../components";
import { Wrapper } from "../styles/newUserContainer";

const NewBookContainer = () => {
  return (
    <Layout breadcrumb="New Book(s)">
      <Wrapper>
        <h1>New Book(s)</h1>

        <NewBookForm />
      </Wrapper>
    </Layout>
  );
};

export default NewBookContainer;
