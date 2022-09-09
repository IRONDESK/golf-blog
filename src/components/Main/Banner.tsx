import React from "react"
import styled from "@emotion/styled"

function Banner() {
  return (
    <Container>
      블로그도 <strong>인스타그램처럼</strong>
    </Container>
  )
}

const Container = styled.article`
  padding: 32px;
  width: 100%;
  height: 320px;
  background-color: #d99310;
  color: #fff;
  font-size: 2.5rem;
  strong {
    display: block;
    margin: 8px 0;
    font-weight: 800;
    font-size: 3.7rem;
  }
`

export default Banner
