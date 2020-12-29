import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../hooks";
import { capFirstLetterInWord } from "../../lib";
import { Profile, Wrapper } from "../../styles/header";

const Header: React.FC = () => {
  const { userPayload, setUserPayload } = useAuth();

  return (
    <Wrapper>
      <Profile>
        <BiLogOut
          onClick={() => {
            delete localStorage.tid;
            setUserPayload(null);
          }}
        />
        <span>
          {capFirstLetterInWord(userPayload?.email.split("@")[0] || "")}
        </span>
      </Profile>
    </Wrapper>
  );
};

export default Header;
