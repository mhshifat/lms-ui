import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from ".";
import { END_POINTS } from "../constants";
import { useFetch, useFetchLazy, useNotify } from "../hooks";
import { Wrapper } from "../styles/allUsers";
import { APISuccessResponse } from "../types/fetch";
import { ILoan } from "../types/loan";

const AllLoans = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { data, loading, refetch } = useFetch<
    APISuccessResponse<{ loans: ILoan[] }>
  >(END_POINTS.LOAN.ALL, {
    method: "GET",
    token: true,
  });
  const [deleteLoan] = useFetchLazy<
    APISuccessResponse<{ updatedLoan: ILoan }>
  >();

  return !loading && data ? (
    <Wrapper>
      <Table
        tableData={data.data.loans.map((loan, i) => ({
          id: i + 1 < 10 ? "0" + (i + 1) : i + 1,
          book: loan.book.title,
          user: loan.user.firstName + " " + loan.user.lastName,
          issueDate: new Date(loan.issueDate).toLocaleString(),
          dueDate: new Date(+loan.dueDate * 1000).toLocaleString(),
          returnDate: new Date(loan.returnDate).toLocaleString(),
          status: loan.status,
        }))}
        headingColumns={[
          "#",
          "Book",
          "User",
          "Issue Date",
          "Due Date",
          "Return Date",
          "Status",
        ]}
        actions={true}
        onView={(id) => {
          const loan = data.data.loans[+id - 1];
          history.push("/loans/" + loan._id);
        }}
        onEdit={(id) => {
          const loan = data.data.loans[+id - 1];
          history.push("/loans/" + loan._id + "/edit");
        }}
        onDelete={(id) => {
          const loan = data.data.loans[+id - 1];
          deleteLoan({
            url: END_POINTS.LOAN.DELETE + loan._id,
            method: "DELETE",
            token: true,
          }).then(() => {
            notify.success("Loan deleted - " + loan._id);
            refetch();
          });
        }}
      />
    </Wrapper>
  ) : null;
};

export default AllLoans;
