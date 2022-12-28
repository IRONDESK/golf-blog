import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

import { COLOR } from "../../shared/constants";
import { Title } from "../../components/Layouts";

import { MemberInfo } from "../../api/UserAuthApi";
import { FindMemberInfoByNickname } from "../../api/MemberApi";
import { CreatePost } from "../../api/BoardApi";

interface PostErrorTypes {
  code: string;
  errors?: {
    field: string;
    value: string;
    reason: string;
  }[];
  message: string;
  status: number;
}

function Post() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [errorCode, setErrorCode] = useState<PostErrorTypes>({
    code: "",
    message: "",
    status: 0,
  });

  const router = useRouter();
  const userData = MemberInfo(getCookie("accessToken") as string);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CreatePost({
      token: getCookie("accessToken") as string,
      data: { title: postTitle, content: postContent },
    })
      .then((res) => {
        if (res.data.result) {
          router.push(`/${userData?.nickname}`);
        }
      })
      .catch((err) => setErrorCode(err.response.data));
  };

  return (
    <>
      <Title title="글쓰기" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={postTitle}
            placeholder="제목을 입력해주세요."
            minLength={6}
            maxLength={30}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
          <p className="post-error-message">
            {!!errorCode.errors?.filter(
              (el) => el.field === "title.title"
            )[0] &&
              errorCode.errors.filter((el) => el.field === "title.title")[0]
                .reason}
          </p>
          <textarea
            value={postContent}
            minLength={20}
            maxLength={500}
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
          ></textarea>
          <p className="post-error-message">
            {!!errorCode.errors?.filter(
              (el) => el.field === "content.content"
            )[0] &&
              errorCode.errors.filter((el) => el.field === "content.content")[0]
                .reason}
          </p>
          <p id="content-length">{postContent.length}/500</p>
          <Button type="submit">올리기</Button>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.section`
  margin: 0 32px;
  padding: 24px 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  input {
    padding: 16px 12px 12px;
    font-size: 1.5rem;
    font-weight: 500;
    border-bottom: 2px solid ${COLOR.main};
    &:focus {
      border-bottom: 3px solid ${COLOR.main};
    }
  }
  textarea {
    padding: 20px;
    min-height: 200px;
    background-color: #f7f7f7;
    border-radius: 8px;
    font-size: 0.95rem;
  }
  #content-length {
    font-size: 0.9rem;
    text-align: right;
  }
  .post-error-message {
    margin: -4px 4px 0;
    text-align: right;
    font-size: 0.8rem;
    color: #ce0700;
  }
`;

const Button = styled.button`
  padding: 16px;
  border-radius: 12px;
  background-color: ${COLOR.main};
  color: #fff;
  font-size: 1.05rem;
`;

export default Post;
