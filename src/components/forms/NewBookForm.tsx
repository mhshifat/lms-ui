import React from "react";
import { AiFillSave } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Input } from "..";
import { END_POINTS } from "../../constants/index";
import { useFetchLazy, useForm, useNotify } from "../../hooks";
import { Group, ItemInput, ItemLabel, Wrapper } from "../../styles/newUserForm";
import { IBook } from "../../types/book";
import { APISuccessResponse } from "../../types/fetch";
import { newBookSchema } from "../../validators/book";

const INITIAL_VALUES = {
  title: "",
  author: "",
  image: "",
  numOfCopies: "",
};
export type NewBookInitialValues = typeof INITIAL_VALUES;
const NewBookForm = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { formValues, handleChange, handleSubmit, errors, setValue } = useForm(
    INITIAL_VALUES,
    {
      validationSchema: newBookSchema,
    }
  );
  const [createBook, { loading }] = useFetchLazy<
    APISuccessResponse<{ createdBook: IBook }>
  >(END_POINTS.BOOK.CREATE);

  const onSubmit = (formValues: NewBookInitialValues) => {
    createBook({
      method: "POST",
      body: formValues,
      token: true,
    })
      .then((res) => {
        if (res.success) {
          notify.success("New book created.");
          history.push("/books");
        }
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <ItemLabel>Title</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="title"
            placeholder="ex. Book title"
            value={formValues.title}
            onChange={handleChange}
            error={errors?.["title"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Author</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="author"
            placeholder="ex. Book author name"
            value={formValues.author}
            onChange={handleChange}
            error={errors?.["author"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Image</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="image"
            placeholder="ex. https:://"
            value={formValues.image}
            onChange={handleChange}
            error={errors?.["image"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Number of Copies</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="numOfCopies"
            placeholder="ex. 1"
            value={formValues.numOfCopies}
            onChange={handleChange}
            error={errors?.["numOfCopies"]}
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

export default NewBookForm;
