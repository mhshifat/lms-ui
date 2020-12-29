import React from "react";
import { useParams } from "react-router-dom";
import { EditBookForm, Layout } from "../components";
import { Wrapper } from "../styles/newUserContainer";

const EditBookContainer = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout breadcrumb="Edit Book">
      <Wrapper>
        <h1>Edit Book</h1>

        <EditBookForm id={id} />
      </Wrapper>
    </Layout>
  );
};

export default EditBookContainer;
