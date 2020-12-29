import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Header, Sidebar } from "..";
import { Breadcrumb, Content, Main, Wrapper } from "../../styles/layout";

const Layout: React.FC<{ breadcrumb: string }> = ({ children, breadcrumb }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Header />
        <Main>
          <Breadcrumb>
            <b>Home</b> <BsChevronRight /> {breadcrumb}
          </Breadcrumb>
          {children}
        </Main>
      </Content>
    </Wrapper>
  );
};

export default Layout;
