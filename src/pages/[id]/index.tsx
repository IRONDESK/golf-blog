import React from "react"
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import { COLOR } from "../../shared/constants"

import Aside from "../../components/Blog/Aside"
import Contents from "../../components/Blog/Contents"
import { Title } from "../../components/Layouts/partials/Title"

function Blog() {
  const router = useRouter()
  // console.log(router.query.id)

  let blogName = "닉네임"
  return (
    <Container>
      <Title title={`${blogName}의 블로그`} />
      <Aside />
      <Contents />
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

export default Blog
