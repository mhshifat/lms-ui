import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from ".";
import { END_POINTS } from "../constants";
import { useFetch, useFetchLazy, useNotify } from "../hooks";
import { Wrapper } from "../styles/allUsers";
import { APISuccessResponse } from "../types/fetch";
import { IUser } from "../types/user";

const AllUsers = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { data, loading, refetch } = useFetch<
    APISuccessResponse<{ users: IUser[] }>
  >(END_POINTS.USER.ALL, {
    method: "GET",
    token: true,
  });
  const [deleteUser] = useFetchLazy<
    APISuccessResponse<{ updatedUser: IUser }>
  >();

  return !loading && data ? (
    <Wrapper>
      <Table
        tableData={data.data.users.map((user, i) => ({
          id: i + 1 < 10 ? "0" + (i + 1) : i + 1,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          mobileNumber: user.mobileNumber,
          role: +user.role === 1 ? "Member" : "Librarian",
        }))}
        headingColumns={[
          "#",
          "Email",
          "First Name",
          "Last Name",
          "Mobile Number",
          "Role",
        ]}
        actions={true}
        onView={(id) => {
          const user = data.data.users[+id - 1];
          history.push("/users/" + user._id);
        }}
        onEdit={(id) => {
          const user = data.data.users[+id - 1];
          history.push("/users/" + user._id + "/edit");
        }}
        onDelete={(id) => {
          const user = data.data.users[+id - 1];
          deleteUser({
            url: END_POINTS.USER.DELETE + user._id,
            method: "DELETE",
            token: true,
          }).then(() => {
            notify.success("User deleted - " + user._id);
            refetch();
          });
        }}
      />
    </Wrapper>
  ) : null;
};

export default AllUsers;
