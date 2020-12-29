import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from ".";
import { END_POINTS } from "../constants";
import { useFetch, useFetchLazy, useNotify } from "../hooks";
import { Wrapper } from "../styles/allUsers";
import { IBook } from "../types/book";
import { APISuccessResponse } from "../types/fetch";

const AllBooks = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { data, loading, refetch } = useFetch<
    APISuccessResponse<{ books: IBook[] }>
  >(END_POINTS.BOOK.ALL, {
    method: "GET",
    token: true,
  });
  const [deleteBook] = useFetchLazy<
    APISuccessResponse<{ updatedBook: IBook }>
  >();

  return !loading && data ? (
    <Wrapper>
      <Table
        tableData={data.data.books.map((book, i) => ({
          id: i + 1 < 10 ? "0" + (i + 1) : i + 1,
          image: book.image,
          title: book.title,
          author: book.author,
          status: book.availableCopies > 0 ? "Available" : "Unavailable",
        }))}
        headingColumns={["#", "Image", "Title", "Author", "Status"]}
        actions={true}
        onView={(id) => {
          const book = data.data.books[+id - 1];
          history.push("/books/" + book._id);
        }}
        onEdit={(id) => {
          const book = data.data.books[+id - 1];
          history.push("/books/" + book._id + "/edit");
        }}
        onDelete={(id) => {
          const book = data.data.books[+id - 1];
          deleteBook({
            url: END_POINTS.BOOK.DELETE + book._id,
            method: "DELETE",
            token: true,
          }).then(() => {
            notify.success("Book deleted - " + book._id);
            refetch();
          });
        }}
      />
    </Wrapper>
  ) : null;
};

export default AllBooks;
