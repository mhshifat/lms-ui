import React from "react";
import { END_POINTS } from "../constants/index";
import { useFetch } from "../hooks";
import { Group, GroupItem, GroupLabel, Wrapper } from "../styles/userDetails";
import { IBook } from "../types/book";
import { APISuccessResponse } from "../types/fetch";

const BookDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useFetch<
    APISuccessResponse<{ book: IBook }>
  >(END_POINTS.BOOK.GET + id, {
    method: "GET",
    token: true,
  });

  return !loading && data ? (
    <Wrapper>
      <Group>
        <GroupLabel>Id</GroupLabel>
        <GroupItem>{data.data.book._id}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Title</GroupLabel>
        <GroupItem>{data.data.book.title}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Author</GroupLabel>
        <GroupItem>{data.data.book.author}</GroupItem>
      </Group>

      <Group>
        <GroupLabel>Status</GroupLabel>
        <GroupItem>
          {data.data.book.availableCopies > 0 ? "Available" : "Unavailable"}
        </GroupItem>
      </Group>

      <Group>
        <GroupLabel>Cover Image</GroupLabel>
        <GroupItem>
          <img
            height="200px"
            src={data.data.book.image}
            alt={data.data.book.title}
          />
        </GroupItem>
      </Group>
    </Wrapper>
  ) : null;
};

export default BookDetails;
