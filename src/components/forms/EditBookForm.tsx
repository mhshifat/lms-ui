import React, { useEffect } from "react";
import { AiFillSave } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Input } from "..";
import { END_POINTS } from "../../constants/index";
import { useFetch, useFetchLazy, useForm, useNotify } from "../../hooks";
import { Group, ItemInput, ItemLabel, Wrapper } from "../../styles/newUserForm";
import { IBook } from "../../types/book";
import { APISuccessResponse } from "../../types/fetch";
import { editBookSchema } from "../../validators/book";

const INITIAL_VALUES = {
  _id: "",
  title: "",
  author: "",
  image: "",
  numOfCopies: "",
};
export type EditBookInitialValues = typeof INITIAL_VALUES;
const EditBookForm: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory();
  const { notify } = useNotify();
  const { data, error } = useFetch<APISuccessResponse<{ book: IBook }>>(
    END_POINTS.BOOK.GET + id,
    {
      method: "GET",
      token: true,
    }
  );
  const {
    formValues,
    handleChange,
    handleSubmit,
    errors,
    setValue,
    reset,
  } = useForm(INITIAL_VALUES, {
    validationSchema: editBookSchema,
  });

  const [updateBook, { loading }] = useFetchLazy<
    APISuccessResponse<{ updatedBook: IBook }>
  >(END_POINTS.BOOK.UPDATE + id);

  useEffect(() => {
    if (data) {
      reset({
        _id: data.data.book._id,
        image: data.data.book.image,
        title: data.data.book.title,
        author: data.data.book.author,
        numOfCopies: data.data.book.numOfCopies + "",
      });
    }
  }, [data]);

  const onSubmit = (formValues: EditBookInitialValues) => {
    updateBook({
      method: "PUT",
      body: formValues,
      token: true,
    })
      .then((res) => {
        if (res.success) {
          notify.success("Book updated - " + id);
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
        <ItemLabel>ID</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="_id"
            placeholder="ex. ......."
            value={formValues._id}
            onChange={handleChange}
            error={errors?.["_id"]}
            disabled
          />
        </ItemInput>
      </Group>

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
        <ItemLabel>Cover Image</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="image"
            placeholder="ex. Book image"
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
            placeholder="ex. 5"
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

export default EditBookForm;
