import React, { useEffect } from "react";
import { AiFillSave } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Input, Select } from "..";
import { END_POINTS } from "../../constants/index";
import { useFetch, useFetchLazy, useForm, useNotify } from "../../hooks";
import { Group, ItemInput, ItemLabel, Wrapper } from "../../styles/newUserForm";
import { APISuccessResponse } from "../../types/fetch";
import { IUser } from "../../types/user";
import { editUserSchema } from "../../validators/user";

const INITIAL_VALUES = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  mobileNumber: "",
  avatar: "",
  role: "",
};
export type EditUserInitialValues = typeof INITIAL_VALUES;
const EditUserForm: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory();
  const { notify } = useNotify();
  const { data, error } = useFetch<APISuccessResponse<{ user: IUser }>>(
    END_POINTS.USER.GET + id,
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
    validationSchema: editUserSchema,
  });
  const [updateUser, { loading }] = useFetchLazy<
    APISuccessResponse<{ updatedUser: IUser }>
  >(END_POINTS.USER.UPDATE + id);

  useEffect(() => {
    if (data) {
      reset({
        _id: data.data.user._id,
        avatar: "",
        email: data.data.user.email,
        firstName: data.data.user.firstName,
        lastName: data.data.user.lastName,
        mobileNumber: data.data.user.mobileNumber,
        role: data.data.user.role + "",
      });
    }
  }, [data]);

  const onSubmit = (formValues: EditUserInitialValues) => {
    updateUser({
      method: "PUT",
      body: formValues,
      token: true,
    })
      .then((res) => {
        if (res.success) {
          notify.success("User updated - " + id);
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
        <ItemLabel>ID</ItemLabel>
        <ItemInput>
          <Input
            type="text"
            name="_id"
            placeholder="ex. example@example.com"
            value={formValues._id}
            onChange={handleChange}
            error={errors?.["email"]}
            disabled
          />
        </ItemInput>
      </Group>

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
            disabled
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
        <ItemLabel>Role</ItemLabel>
        <ItemInput>
          <Select
            placeholder="Choose a role"
            defaultValue={+formValues.role === 1 ? "Member" : "Librarian"}
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

export default EditUserForm;
