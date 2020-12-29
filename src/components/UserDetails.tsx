import React from "react";
import { END_POINTS } from "../constants/index";
import { useFetch } from "../hooks";
import {
  Group,
  GroupItem,
  GroupItemProfile,
  GroupLabel,
  Wrapper,
} from "../styles/userDetails";
import { APISuccessResponse } from "../types/fetch";
import { IUser } from "../types/user";

const UserDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useFetch<
    APISuccessResponse<{ user: IUser }>
  >(END_POINTS.USER.GET + id, {
    method: "GET",
    token: true,
  });

  return !loading && data ? (
    <Wrapper>
      <Group>
        <GroupLabel>Id</GroupLabel>
        <GroupItem>{data.data.user._id}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>First Name</GroupLabel>
        <GroupItem>{data.data.user.firstName}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Last Name</GroupLabel>
        <GroupItem>{data.data.user.lastName}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Email</GroupLabel>
        <GroupItem>{data.data.user.email}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Avatar</GroupLabel>
        <GroupItem>
          <GroupItemProfile>
            <img
              src="https://voxpopulii.in/system/static/dashboard/img/default_user.png"
              alt="user profile"
            />
          </GroupItemProfile>
        </GroupItem>
      </Group>

      <Group>
        <GroupLabel>Role</GroupLabel>
        <GroupItem>
          {+data.data.user.role === 0 ? "Librarian" : "Member"}
        </GroupItem>
      </Group>
    </Wrapper>
  ) : null;
};

export default UserDetails;
