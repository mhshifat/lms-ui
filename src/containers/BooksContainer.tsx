import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { AllBooks, Layout } from "../components";
import { useAuth } from "../hooks";
import { FilterBtns, Wrapper } from "../styles/usersContainer";

const BooksContainer = () => {
  const { userPayload } = useAuth();

  return (
    <Layout breadcrumb="Books">
      <Wrapper>
        <h1>Books</h1>

        {userPayload && +userPayload.role === 0 && (
          <FilterBtns>
            <Link to="/books/new">
              <GoPlus /> New
            </Link>
          </FilterBtns>
        )}

        <AllBooks />
      </Wrapper>
    </Layout>
  );
};

export default BooksContainer;
