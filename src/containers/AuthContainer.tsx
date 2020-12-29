import React from "react";
import bannerImg from "../assets/images/signin.jpg";
import { LoginForm, RegisterForm } from "../components";
import { Banner, Content, Wrapper } from "../styles/authContainer";

interface Props {
  type?: "login" | "register";
}

const AuthContainer: React.FC<Props> = ({ type }) => {
  return (
    <Wrapper>
      <Banner>
        <img src={bannerImg} alt="auth banner" />
      </Banner>

      <Content>
        <h1>Library</h1>
        {type === "register" ? <RegisterForm /> : <LoginForm />}
      </Content>
    </Wrapper>
  );
};

AuthContainer.defaultProps = {
  type: "login",
};

export default AuthContainer;
