import React from "react";
import { useParams } from "react-router-dom";
import { EditLoanForm, Layout } from "../components";
import { Wrapper } from "../styles/newUserContainer";

const EditLoanContainer = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout breadcrumb="Edit Loan">
      <Wrapper>
        <h1>Edit Loan</h1>

        <EditLoanForm id={id} />
      </Wrapper>
    </Layout>
  );
};

export default EditLoanContainer;
