import React from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import { COLOR } from "../../shared/constants"

function Login() {
  return (
    <Container>
      <Form>
        <input style={{ order: 2 }} type="text" id="email" autoFocus={true} />
        <label style={{ order: 1 }} htmlFor="email">
          이메일
        </label>
        <input style={{ order: 4 }} type="password" id="password" />
        <label style={{ order: 3 }} htmlFor="password">
          비밀번호
        </label>
        <div style={{ order: 5 }}>
          <LoginButton type="submit">로그인</LoginButton>
        </div>
        <div style={{ order: 6 }}>
          <JoinButton>
            <Link href="/user/join">회원가입</Link>
          </JoinButton>
        </div>
      </Form>
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
  flex-direction: column;
  justify-content: center;
  input {
    margin: 0 0 32px;
    padding: 12px;
    width: 100%;
    font-size: 1.25rem;
    border-radius: 10px;
    border: 1px solid ${COLOR.border};
    &:focus {
      border: 2px solid ${COLOR.main};
      & + label {
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
  }
  label {
    margin: 0 0 8px;
    transition: all 0.3s;
  }
`

const LoginButton = styled.button`
  padding: 16px 0;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${COLOR.gray};
  color: ${COLOR.gray};
  font-size: 1.15rem;
  transition: all 0.3s;
  &:hover,
  &:focus {
    background-color: ${COLOR.gray};
    color: ${COLOR.white};
    font-weight: 500;
  }
`

const JoinButton = styled.p`
  margin: 24px 0;
  text-align: right;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

export default Login
