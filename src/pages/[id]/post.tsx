import React from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"

import { COLOR } from "../../shared/constants"
import { Title } from "../../components/Layouts"
import Aside from "../../components/Blog/Aside"

function Post() {
  const router = useRouter()
  return (
    <Container>
      <Title />
      <Aside />
    </Container>
  )
}
const Container = styled.section`
  display: flex;
  padding: 20px 28px 40px;
  min-height: 100vh;
  background-color: ${COLOR.background};
  justify-content: space-between;
  gap: 24px;
`

export default Post
