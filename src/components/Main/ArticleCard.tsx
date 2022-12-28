import React from "react";
import styled from "@emotion/styled";
import { IBoardArticleTypes } from "../../types/BoardType";
import Link from "next/link";

function ArticleCard({
  boardId,
  title,
  content,
  createdAt,
  createdBy,
}: IBoardArticleTypes) {
  const convertDate = (date: string) => {
    const target = new Date(date);
    const converted = new Intl.DateTimeFormat("ko-KR").format(target);
    return converted;
  };
  return (
    <Link href={`/${createdBy}/${boardId}`}>
      <Container>
        <h4>{title}</h4>
        <p className="card-content">{content}</p>
        <Written>
          {convertDate(createdAt)} | {createdBy}
        </Written>
      </Container>
    </Link>
  );
}

const Container = styled.li`
  cursor: pointer;
  position: relative;
  height: 136px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
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
`;
const Written = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  margin: 0 0 16px;
  align-items: center;
  color: #777;
  font-size: 0.8rem;
  &::before {
    content: "history_edu";
    margin: 0 2px 0 -1px;
    border-radius: 100%;
    color: #777;
    font-size: 1.15rem;
    font-family: "Material Icons";
  }
`;
export default ArticleCard;
