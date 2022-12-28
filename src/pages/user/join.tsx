import React from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { COLOR } from "../../shared/constants";

import { SubmitHandler, useForm, FieldError } from "react-hook-form";
import { IMemberDataType } from "../../types/MemberType";
import { CreateMember } from "../../api/UserAuthApi";

function Join() {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IMemberDataType>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IMemberDataType> = (data) => {
    CreateMember(data)
      .then((res) => {
        alert("가입완료");
        console.log(res);
        router.push("/user/login");
      })
      .catch((res) => {
        alert(res);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>회원가입</h2>
        <label htmlFor="email">
          <span>이메일</span>
          <input
            type="email"
            id="email"
            autoFocus={true}
            required
            {...register("email", {
              required: true,
            })}
          />
        </label>
        <label htmlFor="password">
          <span>비밀번호</span>
          <input
            type="password"
            id="password"
            required
            {...register("password", {
              required: true,
            })}
          />
        </label>
        <label htmlFor="username">
          <span>이름</span>
          <input
            type="text"
            id="username"
            required
            {...register("name", {
              required: true,
            })}
          />
        </label>
        <label htmlFor="nickname">
          <span>닉네임</span>
          <input
            type="text"
            id="nickname"
            minLength={5}
            maxLength={15}
            placeholder="최소 5자, 최대 15자의 영문자"
            required
            {...register("nickname", {
              required: true,
            })}
          />
        </label>
        <label htmlFor="birth">
          <span>생년월일</span>
          <input
            type="date"
            id="birth"
            required
            {...register("birth", {
              required: true,
            })}
          />
        </label>
        <div>
          <JoinButton type="submit">회원가입</JoinButton>
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

const JoinButton = styled.button`
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

export default Join;
