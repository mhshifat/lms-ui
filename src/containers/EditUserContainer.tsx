import React from "react";
import { useParams } from "react-router-dom";
import { EditUserForm, Layout } from "../components";
import { Wrapper } from "../styles/newUserContainer";

const EditUserContainer = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout breadcrumb="Edit User">
      <Wrapper>
        <h1>Edit User</h1>

        <EditUserForm id={id} />
      </Wrapper>
    </Layout>
  );
};

export default EditUserContainer;
