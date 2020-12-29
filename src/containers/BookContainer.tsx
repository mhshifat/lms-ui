import React from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { BookDetails, Layout } from "../components";
import { useAuth } from "../hooks";
import { Wrapper } from "../styles/newUserContainer";
import { FilterBtns } from "../styles/usersContainer";

const BookContainer = () => {
  const { userPayload } = useAuth();
  const { id } = useParams<{ id: string }>();

  return (
    <Layout breadcrumb="View Book">
      <Wrapper>
        <h1>View Book</h1>

        {userPayload && +userPayload.role === 0 && (
          <FilterBtns>
            <Link to={`/books/${id}/edit`}>
              <BiEdit /> Edit
            </Link>
          </FilterBtns>
        )}

        <BookDetails id={id} />
      </Wrapper>
    </Layout>
  );
};

export default BookContainer;
