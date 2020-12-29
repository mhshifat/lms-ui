import React from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { Layout, UserDetails } from "../components";
import { Wrapper } from "../styles/newUserContainer";
import { FilterBtns } from "../styles/usersContainer";

const UserContainer = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout breadcrumb="View User">
      <Wrapper>
        <h1>View User</h1>

        <FilterBtns>
          <Link to={`/users/${id}/edit`}>
            <BiEdit /> Edit
          </Link>
        </FilterBtns>

        <UserDetails id={id} />
      </Wrapper>
    </Layout>
  );
};

export default UserContainer;
