import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { AllLoans, Layout } from "../components";
import { useAuth } from "../hooks";
import { FilterBtns, Wrapper } from "../styles/usersContainer";

const LoansContainer = () => {
  const { userPayload } = useAuth();

  return (
    <Layout breadcrumb="Loans">
      <Wrapper>
        <h1>Loans</h1>

        {userPayload && +userPayload.role === 0 && (
          <FilterBtns>
            <Link to="/loans/new">
              <GoPlus /> New
            </Link>
          </FilterBtns>
        )}

        <AllLoans />
      </Wrapper>
    </Layout>
  );
};

export default LoansContainer;
