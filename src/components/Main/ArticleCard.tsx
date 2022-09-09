import React from "react"
import styled from "@emotion/styled"
import { IBoardArticleTypes } from "../../types/BoardType"

function ArticleCard({
  title,
  content,
  lastModifiedAt,
  createdBy,
  likeCount,
}: IBoardArticleTypes) {
  return (
    <Container>
      <Img>
        <label>{likeCount}</label>
      </Img>
      <TextWrap>
        <h4>{title}</h4>
        <p className="card-content">{content}</p>
        <Written>
          <p className="card-createdby">{createdBy}</p>
          <p className="card-modifiedat">{lastModifiedAt}</p>
        </Written>
      </TextWrap>
    </Container>
  )
}

const Container = styled.li`
  background-color: #fff;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  overflow: hidden;
`
const Img = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  background-color: #bfbfbf;
  label {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    bottom: 12px;
    right: 12px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    color: #fff;
    font-size: 0.85rem;
    &::before {
      content: "favorite";
      margin: 0 4px 0 0;
      font-family: "Material Icons";
    }
  }
`

const TextWrap = styled.div`
  padding: 16px;
  h4 {
    display: block;
    margin: 4px 0;
    overflow: hidden;
    font-weight: 600;
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .card-content {
    display: -webkit-box;
    margin: 8px 0;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.85rem;
    line-height: 1.1rem;
  }
`
const Written = styled.div`
  display: flex;
  margin: 12px 0 0 0;
  align-items: center;
  justify-content: space-between;
  p {
    color: #777;
    font-size: 0.8rem;
  }
  .card-createdby {
    display: flex;
    align-items: center;
    &::before {
      content: "history_edu";
      margin: 0 2px 0 -1px;
      border-radius: 100%;
      color: #777;
      font-size: 1.15rem;
      font-family: "Material Icons";
    }
  }
`
export default ArticleCard
