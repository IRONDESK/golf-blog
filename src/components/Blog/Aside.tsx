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
          <p>@nickname</p>
        </ProfileText>
      </Profile>
      <BoardList>board</BoardList>
      <Info>info</Info>
    </Container>
  )
}

const Container = styled.aside`
  margin-left: -28px;
  padding: 36px 0;
  min-width: 264px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0 0 32px 12px rgba(0, 0, 0, 0.05);
`
const Profile = styled.div``
const Avatar = styled.p`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 1px solid ${COLOR.border};
  border-radius: 100%;
`
const ProfileText = styled.div`
  text-align: center;
  strong {
    display: block;
    padding: 16px 0 8px;
    font-weight: 600;
    font-size: 1.5rem;
  }
  p {
    color: ${COLOR.gray};
    font-size: 0.9rem;
    font-weight: 300;
  }
`
const BoardList = styled.ul``
const Info = styled.div``

export default Aside
