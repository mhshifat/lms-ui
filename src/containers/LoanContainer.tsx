import React from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { Layout, LoanDetails } from "../components";
import { useAuth } from "../hooks";
import { Wrapper } from "../styles/newUserContainer";
import { FilterBtns } from "../styles/usersContainer";

const LoanContainer = () => {
  const { userPayload } = useAuth();
  const { id } = useParams<{ id: string }>();

  return (
    <Layout breadcrumb="View Loan">
      <Wrapper>
        <h1>View Loan</h1>

        {userPayload && +userPayload.role === 0 && (
          <FilterBtns>
            <Link to={`/loans/${id}/edit`}>
              <BiEdit /> Edit
            </Link>
          </FilterBtns>
        )}

        <LoanDetails id={id} />
      </Wrapper>
    </Layout>
  );
};

export default LoanContainer;
