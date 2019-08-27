import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Elements/Footer/Footer";

const Main = styled.main`
  position: relative;
`;

export function PublicLayout({ children, ...rest }) {
  return (
    <Main {...rest}>
      <Navbar />
      {children}
      <Footer>
        Designed, Developed and Deployed by {` `}
        <a href="https://wesleychang.me">Wesley Chang</a> &copy;{" "}
        {new Date().getFullYear()}
      </Footer>
    </Main>
  );
}
