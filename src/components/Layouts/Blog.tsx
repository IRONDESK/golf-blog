import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { Title } from "./partials/Title";
import Profile from "../Blog/Profile";
import PostList from "../Blog/PostList";
import PostCard from "../Blog/PostCard";
import { IBoardArticleTypes } from "../../types/BoardType";

interface IBlogLayoutPropsType {
  userData: any;
  blogData?: any;
  children: any;
}

function Blog({ userData, blogData, children }: IBlogLayoutPropsType) {
  const router = useRouter();

  return (
    <Container>
      <Title
        title={router.query.id ? `${userData?.nickname}의 블로그` : undefined}
      />
      <Profile userData={userData} />
      <Top>
        <ItemInfo>
          {blogData?.data && `${blogData?.data?.length || 0}개의 게시글`}
        </ItemInfo>
        <Search>
          <input type="text" />
        </Search>
      </Top>
      <Wrap>{children}</Wrap>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 32px 20px;
  background-color: #f4f4f4;
  @media (max-width: 640px) {
    padding: 0 20px 20px;
  }
`;

const Top = styled.header`
  display: flex;
  margin: 16px 0;
  padding: 0px 16px;
  align-items: center;
  justify-content: space-between;
`;

const ItemInfo = styled.div`
  padding: 0 0 0 12px;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Search = styled.div`
  position: relative;
  padding: 12px 0;
  width: 52px;
  border-radius: 24px;
  transition: all 0.3s;
  &:has(input:focus),
  &:hover {
    width: 200px;
    background-color: #fff;
  }
  &::after {
    content: "search";
    position: absolute;
    width: 20px;
    height: 20px;
    font-size: 22px;
    left: 20px;
    font-family: "Material Icons";
  }
  input {
    width: 100%;
    padding: 0 0 0 52px;
    background: none;
    font-size: 1rem;
    z-index: 1;
  }
`;

const Wrap = styled.section`
  margin: 8px 12px;
`;

export default Blog;
