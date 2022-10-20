import React from "react"
import axios from "axios"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { COLOR } from "../../shared/constants"

import { SubmitHandler, useForm, FieldError } from "react-hook-form"
import { IMemberDataType } from "../../types/MemberType"
import { CreateMember } from "../../api/UserAuthApi"

function Join() {
  const router = useRouter()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IMemberDataType>({ mode: "onBlur" })

  const onSubmit: SubmitHandler<IMemberDataType> = (data) => {
    CreateMember(data)
      .then((res) => {
        alert("가입완료")
        console.log(res)
        router.push("/user/login")
      })
      .catch((res) => {
        alert(res)
      })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ order: 2 }}
          type="text"
          id="email"
          autoFocus={true}
          required
          {...register("email", {
            required: true,
          })}
        />
        <label style={{ order: 1 }} htmlFor="email">
          이메일
        </label>
        <input
          style={{ order: 4 }}
          type="password"
          id="password"
          required
          {...register("password", {
            required: true,
          })}
        />
        <label style={{ order: 3 }} htmlFor="password">
          비밀번호
        </label>
        <input
          style={{ order: 6 }}
          type="text"
          id="username"
          required
          {...register("name", {
            required: true,
          })}
        />
        <label style={{ order: 5 }} htmlFor="username">
          이름
        </label>
        <input
          style={{ order: 8 }}
          type="text"
          id="nickname"
          required
          {...register("nickname", {
            required: true,
          })}
        />
        <label style={{ order: 7 }} htmlFor="nickname">
          닉네임
        </label>
        <input
          style={{ order: 10 }}
          type="date"
          id="birth"
          required
          {...register("birth", {
            required: true,
          })}
        />
        <label style={{ order: 9 }} htmlFor="birth">
          생년월일
        </label>
        <div style={{ order: 11 }}>
          <JoinButton type="submit">회원가입</JoinButton>
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
  height: 80vh;
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
const JoinButton = styled.button`
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

export default Join
