import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { AllUsers, Layout } from "../components";
import { FilterBtns, Wrapper } from "../styles/usersContainer";

const UsersContainer = () => {
  return (
    <Layout breadcrumb="Users">
      <Wrapper>
        <h1>Users</h1>

        <FilterBtns>
          <Link to="/users/new">
            <GoPlus /> New
          </Link>
        </FilterBtns>

        <AllUsers />
      </Wrapper>
    </Layout>
  );
};

export default UsersContainer;
