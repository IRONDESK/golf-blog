import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../../shared/constants"

function Join() {
  return (
    <Container>
      <Form>회원가입</Form>
    </Container>
  )
}

const Container = styled.main`
  background-color: ${COLOR.background};
`
const Form = styled.form`
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
  max-width: 460px;
  height: 70vh;
`

export default Join
