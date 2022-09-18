import styled from "@emotion/styled"
import React from "react"
import { COLOR } from "../../shared/constants"

function Aside() {
  return (
    <Container>
      <Profile>
        <Avatar />
        <ProfileText>
          <strong>이름</strong>
          <span>@nickname</span>
        </ProfileText>
      </Profile>
      <BoardList>board</BoardList>
      <Info>info</Info>
    </Container>
  )
}

const Container = styled.aside`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div,
  & > ul {
    padding: 16px;
    background-color: ${COLOR.white};
    border-radius: 10px;
  }
`
const Profile = styled.div``
const Avatar = styled.p`
  float: left;
  width: 48px;
  height: 48px;
  border: 1px solid ${COLOR.border};
  border-radius: 100%;
`
const ProfileText = styled.div`
  margin: 6px 0 6px 48px;
  padding: 0 0 0 12px;
  text-align: left;
  line-height: 1.1rem;
  strong {
    display: block;
    font-weight: 600;
  }
  span {
    color: ${COLOR.gray};
    font-size: 0.9rem;
    font-weight: 300;
  }
`
const BoardList = styled.ul``
const Info = styled.div``

export default Aside
