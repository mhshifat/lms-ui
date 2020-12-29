import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Input } from "..";
import { END_POINTS } from "../../constants";
import { useAuth, useFetchLazy, useForm, useNotify } from "../../hooks";
import { Group, Notice, SignInAs, Wrapper } from "../../styles/loginForm";
import { UserPayload } from "../../types/auth";
import { APISuccessResponse } from "../../types/fetch";
import { loginInputSchema } from "../../validators";
import Checkbox from "../elements/Checkbox";

const INITIAL_VALUES = {
  email: "",
  password: "",
  rememberMe: false,
};
export type LoginInitialValues = typeof INITIAL_VALUES;
const LoginForm = () => {
  const history = useHistory();
  const { notify } = useNotify();
  const { setUserPayload } = useAuth();
  const [login, { loading }] = useFetchLazy<
    APISuccessResponse<{ token: string; userPayload: UserPayload }>
  >(END_POINTS.AUTH.LOGIN);
  const { formValues, handleChange, handleSubmit, errors, reset } = useForm(
    INITIAL_VALUES,
    {
      validationSchema: loginInputSchema,
    }
  );

  const onSubmit = (formValues: LoginInitialValues) => {
    login({
      method: "POST",
      body: formValues,
    })
      .then((res) => {
        if (res.success) {
          setUserPayload(res.data.userPayload);
          localStorage.tid = res.data.token;
          notify.success("You have been logged in.");
          history.push("/");
        }
      })
      .catch((err) => {
        notify.error(err.message);
      });
  };

  const loginAsLibrarian = () => {
    reset({
      email: "user1@gmail.com",
      password: "user1",
      rememberMe: false,
    });
  };

  const loginAsMember = () => {
    reset({
      email: "user2@gmail.com",
      password: "user2",
      rememberMe: false,
    });
  };

  return (
    <Wrapper noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        label="Email"
        fullWidth
        name="email"
        onChange={handleChange}
        error={errors?.["email"] || ""}
        value={formValues.email}
        disabled={loading}
      />
      <Input
        type="password"
        label="Password"
        fullWidth
        name="password"
        onChange={handleChange}
        error={errors?.["password"] || ""}
        value={formValues.password}
        disabled={loading}
      />

      <Group>
        <Checkbox
          label="Remember me"
          name="rememberMe"
          checked={formValues.rememberMe}
          onChange={handleChange}
        />

        <SignInAs>
          Sign in as: <span onClick={loginAsLibrarian}>Librarian</span>{" "}
          <span onClick={loginAsMember}>Member</span>
        </SignInAs>
      </Group>

      <Button loading={loading} type="submit">
        Sign in
      </Button>
      <Notice>
        <b>
          This is a demo application. Do not send/upload sensitive information!
        </b>{" "}
        All information submitted is <b>public!</b> The database is cleaned
        daily.
      </Notice>
      <Link to="/register">Create an account.</Link>
    </Wrapper>
  );
};

export default LoginForm;
