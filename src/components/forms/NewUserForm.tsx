import React from "react";
import { AiFillSave } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Input, Select, Upload } from "..";
import { END_POINTS } from "../../constants/index";
import { useFetchLazy, useForm, useNotify } from "../../hooks";
import { Group, ItemInput, ItemLabel, Wrapper } from "../../styles/newUserForm";
import { APISuccessResponse } from "../../types/fetch";
import { IUser } from "../../types/user";
import { newUserSchema } from "../../validators";

const INITIAL_VALUES = {
  email: "",
  firstName: "",
  lastName: "",
  mobileNumber: "",
  avatar: "",
  role: "",
};
export type NewUserInitialValues = typeof INITIAL_VALUES;
const NewUserForm = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { formValues, handleChange, handleSubmit, errors, setValue } = useForm(
    INITIAL_VALUES,
    {
      validationSchema: newUserSchema,
    }
  );
  const [createUser, { loading }] = useFetchLazy<
    APISuccessResponse<{ createdUser: IUser }>
  >(END_POINTS.USER.CREATE);

  const onSubmit = (formValues: NewUserInitialValues) => {
    createUser({
      method: "POST",
      body: formValues,
      token: true,
    })
      .then((res) => {
        if (res.success) {
          notify.success("New user created.");
          history.push("/users");
        }
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <ItemLabel>Email</ItemLabel>
        <ItemInput>
          <Input
            type="email"
            name="email"
            placeholder="ex. example@example.com"
            value={formValues.email}
            onChange={handleChange}
            error={errors?.["email"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>First Name</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="firstName"
            placeholder="ex. John"
            validation={false}
            value={formValues.firstName}
            onChange={handleChange}
            error={errors?.["firstName"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Last Name</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="lastName"
            placeholder="ex. Doe"
            validation={false}
            value={formValues.lastName}
            onChange={handleChange}
            error={errors?.["lastName"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Phone Number</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="mobileNumber"
            placeholder="ex. +880..............."
            validation={false}
            value={formValues.mobileNumber}
            onChange={handleChange}
            error={errors?.["mobileNumber"]}
          />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Avatar</ItemLabel>
        <ItemInput>
          <Upload />
        </ItemInput>
      </Group>

      <Group>
        <ItemLabel>Role</ItemLabel>
        <ItemInput>
          <Select
            placeholder="Choose a role"
            options={[
              { label: "Librarian", value: "librarian" },
              { label: "Member", value: "member" },
            ]}
            onValueSelect={(value) => {
              setValue("role", value === "librarian" ? "0" : "1");
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

export default NewUserForm;
