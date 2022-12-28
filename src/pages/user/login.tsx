import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { COLOR } from "../../shared/constants";

import { LoginAuth, MemberInfo } from "../../api/UserAuthApi";
import { setCookie } from "cookies-next";

function Login() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    LoginAuth(userEmail, userPwd).then((res) => {
      const accessToken = res.data.accessToken;
      setCookie("accessToken", accessToken);
      router.push("/");
    });
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>로그인</h2>
        <label htmlFor="email">
          <span>이메일</span>
          <input
            type="email"
            id="email"
            autoFocus={true}
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
        </label>
        <label htmlFor="password">
          <span>비밀번호</span>
          <input
            type="password"
            id="password"
            onChange={(e) => setUserPwd(e.target.value)}
            value={userPwd}
          />
        </label>
        <div>
          <LoginButton type="submit">로그인</LoginButton>
        </div>
        <div>
          <JoinButton>
            <Link href="/user/join">회원가입</Link>
          </JoinButton>
        </div>
      </Form>
    </Container>
  );
}

const Container = styled.main`
  background-color: ${COLOR.background};
`;
const Form = styled.form`
  display: flex;
  margin: 0 auto;
  padding: 40px 20px 48px;
  max-width: 460px;
  min-height: 88vh;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  h2 {
    margin: 0 0 20px;
    font-size: 2rem;
    font-weight: 600;
  }
  input {
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid ${COLOR.border};
    &:focus {
      border: 2px solid ${COLOR.main};
    }
  }
  label {
    span {
      display: inline-block;
      margin: 0 0 8px;
      transition: all 0.3s;
    }
    &:has(input:focus) {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`;

const LoginButton = styled.button`
  padding: 16px 0;
  width: 100%;
  background-color: ${COLOR.gray};
  border-radius: 10px;
  color: #fff;
  font-size: 1.15rem;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

const JoinButton = styled.p`
  margin: 24px 0;
  text-align: right;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export default Login;
