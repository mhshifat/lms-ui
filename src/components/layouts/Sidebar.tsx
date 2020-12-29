import React from "react";
import { FaRegAddressCard, FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Item, List, Logo, Wrapper } from "../../styles/sidebar";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { userPayload } = useAuth();

  return (
    <Wrapper>
      <Logo>Library</Logo>
      <List>
        {userPayload && +userPayload?.role === 0 && (
          <Item active={location.pathname.startsWith("/users")}>
            <span>
              <FaUsers />
            </span>
            <span>
              <Link to="/users">Users</Link>
            </span>
          </Item>
        )}

        <Item active={location.pathname.startsWith("/books")}>
          <span>
            <ImBooks />
          </span>
          <span>
            <Link to="/books">Books</Link>
          </span>
        </Item>

        <Item active={location.pathname.startsWith("/loans")}>
          <span>
            <FaRegAddressCard />
          </span>
          <span>
            <Link to="/loans">Loans</Link>
          </span>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
