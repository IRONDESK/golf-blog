import React from "react";
import styled from "@emotion/styled";
import { FindAll } from "../../api/BoardApi";
import { IBoardArticleTypes } from "../../types/BoardType";

import ArticleCard from "./ArticleCard";

function RecentList() {
  const AllBlogBoard: IBoardArticleTypes[] = FindAll()?.data;
  console.log(AllBlogBoard);
  return (
    <Container>
      <Title>지금 이 순간</Title>
      <CardWrap>
        {AllBlogBoard?.map((item, index) => (
          <ArticleCard
            key={index}
            boardId={item.boardId}
            title={item.title}
            content={item.content}
            createdBy={item.createdBy}
            createdAt={item.createdAt}
          />
        ))}
      </CardWrap>
    </Container>
  );
}

const Container = styled.section`
  padding: 32px;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
const CardWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px 0;
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default RecentList;
