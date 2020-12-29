import React from "react";
import { AiFillSave } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Select } from "..";
import { END_POINTS } from "../../constants/index";
import { useFetch, useFetchLazy, useForm, useNotify } from "../../hooks";
import { Group, ItemInput, ItemLabel, Wrapper } from "../../styles/newUserForm";
import { IBook } from "../../types/book";
import { APISuccessResponse } from "../../types/fetch";
import { ILoan } from "../../types/loan";
import { IUser } from "../../types/user";
import { newLoanSchema } from "../../validators";

const INITIAL_VALUES = {
  book: "",
  user: "",
};
export type NewLoanInitialValues = typeof INITIAL_VALUES;
const NewLoanForm = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { formValues, handleChange, handleSubmit, errors, setValue } = useForm(
    INITIAL_VALUES,
    {
      validationSchema: newLoanSchema,
    }
  );
  const { data: booksData } = useFetch<APISuccessResponse<{ books: IBook[] }>>(
    END_POINTS.BOOK.ALL,
    {
      method: "GET",
      token: true,
    }
  );
  const { data: usersData } = useFetch<APISuccessResponse<{ users: IUser[] }>>(
    END_POINTS.USER.ALL,
    {
      method: "GET",
      token: true,
    }
  );
  const [createLoan, { loading }] = useFetchLazy<
    APISuccessResponse<{ createdLoan: ILoan }>
  >(END_POINTS.LOAN.CREATE);

  const onSubmit = (formValues: NewLoanInitialValues) => {
    createLoan({
      method: "POST",
      body: formValues,
      token: true,
    })
      .then((res) => {
        if (res.success) {
          notify.success("New Loan created.");
          history.push("/loans");
        }
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <ItemLabel>Book</ItemLabel>
        <ItemInput>
          <Select
            placeholder="Choose a book"
            options={booksData?.data.books.map((book) => ({
              label: book.title,
              value: book._id,
            }))}
            onValueSelect={(value) => {
              setValue("book", value);
            }}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>User</ItemLabel>
        <ItemInput>
          <Select
            placeholder="Choose a user"
            options={usersData?.data.users.map((user) => ({
              label: user.firstName + " " + user.lastName,
              value: user._id,
            }))}
            onValueSelect={(value) => {
              setValue("user", value);
            }}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel />
        <ItemInput>
          <Button type="submit" fullWidth={false} loading={loading}>
            <AiFillSave />
            Save
          </Button>
        </ItemInput>
      </Group>
    </Wrapper>
  );
};

export default NewLoanForm;
