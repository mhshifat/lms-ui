import React from "react";
import { END_POINTS } from "../constants/index";
import { useFetch } from "../hooks";
import { Group, GroupItem, GroupLabel, Wrapper } from "../styles/userDetails";
import { APISuccessResponse } from "../types/fetch";
import { ILoan } from "../types/loan";

const LoanDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useFetch<
    APISuccessResponse<{ loan: ILoan }>
  >(END_POINTS.LOAN.GET + id, {
    method: "GET",
    token: true,
  });

  return !loading && data ? (
    <Wrapper>
      <Group>
        <GroupLabel>Id</GroupLabel>
        <GroupItem>{data.data.loan._id}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Book</GroupLabel>
        <GroupItem>{data.data.loan.book.title}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>User</GroupLabel>
        <GroupItem>
          {data.data.loan.user.firstName + " " + data.data.loan.user.lastName} (
          {data.data.loan.user.email})
        </GroupItem>
      </Group>

      <Group>
        <GroupLabel>Issue Date</GroupLabel>
        <GroupItem>
          {new Date(data.data.loan.issueDate).toLocaleString()}
        </GroupItem>
      </Group>

      <Group>
        <GroupLabel>Due Date</GroupLabel>
        <GroupItem>
          {new Date(+data.data.loan.dueDate * 1000).toLocaleString()}
        </GroupItem>
      </Group>

      <Group>
        <GroupLabel>Status</GroupLabel>
        <GroupItem>{data.data.loan.status}</GroupItem>
      </Group>
    </Wrapper>
  ) : null;
};

export default LoanDetails;
