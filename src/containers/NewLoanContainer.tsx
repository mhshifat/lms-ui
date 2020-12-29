import React from "react";
import { Layout, NewLoanForm } from "../components";
import { Wrapper } from "../styles/newUserContainer";

const NewLoanContainer = () => {
  return (
    <Layout breadcrumb="New Loan(s)">
      <Wrapper>
        <h1>New Loan(s)</h1>

        <NewLoanForm />
      </Wrapper>
    </Layout>
  );
};

export default NewLoanContainer;
