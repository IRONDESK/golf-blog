import React from "react";
import styled from "@emotion/styled";

import { Header, Footer } from "./";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin: 60px 0 0;
`;
