import React from "react";
import { AiFillSave } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Input } from "..";
import { END_POINTS } from "../../constants/index";
import { useFetch, useFetchLazy, useForm, useNotify } from "../../hooks";
import {
  DatePickerWithStyle,
  Group,
  ItemInput,
  ItemLabel,
  Wrapper,
} from "../../styles/newUserForm";
import { APISuccessResponse } from "../../types/fetch";
import { ILoan } from "../../types/loan";
import { editLoanSchema } from "../../validators";

const INITIAL_VALUES = {
  returnDate: "",
};
export type EditLoanInitialValues = typeof INITIAL_VALUES;
const EditLoanForm: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory();
  const { notify } = useNotify();
  const { data, error } = useFetch<APISuccessResponse<{ loan: ILoan }>>(
    END_POINTS.LOAN.GET + id,
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
    validationSchema: editLoanSchema,
  });

  const [updateLoan, { loading }] = useFetchLazy<
    APISuccessResponse<{ updatedLoan: ILoan }>
  >(END_POINTS.LOAN.UPDATE + id);

  const onSubmit = (formValues: EditLoanInitialValues) => {
    updateLoan({
      method: "PUT",
      body: formValues,
      token: true,
    })
      .then((res) => {
        if (res.success) {
          notify.success("Loan updated - " + id);
          history.push("/loans");
        }
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  if (data?.data.loan.returnDate) history.push("/loans");
  return data ? (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <ItemLabel>ID</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="_id"
            placeholder="ex. ......."
            value={data?.data.loan._id}
            error={errors?.["_id"]}
            disabled
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Book</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="book"
            placeholder="ex. Book name"
            value={data?.data.loan.book.title}
            error={errors?.["book"]}
            disabled
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>User</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="user"
            placeholder="ex. User name"
            value={
              data?.data.loan.user.firstName +
              " " +
              data?.data.loan.user.lastName
            }
            error={errors?.["user"]}
            disabled
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Issue Date</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="issueDate"
            placeholder="ex. Issue date"
            value={new Date(data?.data.loan.issueDate || "").toLocaleString()}
            error={errors?.["issueDate"]}
            disabled
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Due Date</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="dueDate"
            placeholder="ex. Due date"
            value={
              data
                ? new Date(+data?.data.loan.dueDate * 1000).toLocaleString()
                : ""
            }
            error={errors?.["dueDate"]}
            disabled
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Status</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="status"
            placeholder="ex. Status"
            value={data?.data.loan.status}
            error={errors?.["status"]}
            disabled
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Return Date</ItemLabel>
        <ItemInput>
          <DatePickerWithStyle
            selected={
              formValues.returnDate ? new Date(formValues.returnDate) : null
            }
            onChange={(date) => {
              setValue("returnDate", date + "");
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
  ) : null;
};

export default EditLoanForm;
