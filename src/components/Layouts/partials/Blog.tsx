import React from "react"
import styled from "@emotion/styled"

import Aside from "../../Blog/Aside"
import { COLOR } from "../../../shared/constants"

function Blog({ children }: any) {
  return (
    <Container>
      <Aside />
      <section style={{ width: "100%" }}>{children}</section>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  padding: 20px 28px 40px;
  min-height: 100vh;
  background-color: ${COLOR.background};
  justify-content: space-between;
  gap: 28px;
`

export default Blog
