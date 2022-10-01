import styled from "@emotion/styled"
import React from "react"
import { COLOR } from "../../shared/constants"

interface BoardPostPropsType {
  title: string
  content: string
  createdAt: string
  commentCount: number
  likeCount: number
}

function PostCard({
  title,
  content,
  createdAt,
  commentCount,
  likeCount,
}: BoardPostPropsType) {
  return (
    <Container>
      <Head>
        <p>{title}</p>
        <p>{createdAt}</p>
      </Head>
      <Content>{content}</Content>
      <Buttons>
        <Like type="button">{likeCount.toLocaleString()}</Like>
        <Comment type="button">{commentCount.toLocaleString()}</Comment>
      </Buttons>
    </Container>
  )
}

const Container = styled.section`
  padding: 32px 36px;
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
  /* box-shadow: 0 0 32px 12px rgba(0, 0, 0, 0.05); */
`
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:first-of-type {
    font-size: 1.35rem;
    font-weight: 500;
  }
  p:last-of-type {
    font-size: 0.9rem;
    color: ${COLOR.gray};
  }
`
const Content = styled.p`
  margin: 24px 0 0;
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.2rem;
`

const Buttons = styled.div`
  display: flex;
  margin: 24px 0 0;
  gap: 16px;
  button {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    font-size: 0.9rem;
    border-radius: 20px;
  }
`
const Like = styled.button`
  background-color: #ffecf7;
  color: #ff88b3;
  &::before {
    content: "thumb_up";
    margin: 0 4px 0 0;
    left: 4px;
    font-family: "Material Icons";
  }
`
const Comment = styled.button`
  background-color: #eaf2fe;
  color: #589afa;
  &::before {
    content: "chat_bubble";
    margin: 0 4px 0 0;
    left: 4px;
    font-family: "Material Icons";
  }
`

export default PostCard
