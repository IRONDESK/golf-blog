import React, { useState } from "react";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";

import PostList from "../../components/Blog/PostList";
import PostCard from "../../components/Blog/PostCard";
import { IBoardArticleTypes } from "../../types/BoardType";

import { FindBlogByNickname } from "../../api/BoardApi";
import { FindMemberInfoByNickname } from "../../api/MemberApi";
import Blog from "../../components/Layouts/Blog";

interface IBlogIndexPropsType {
  nickname: string;
}

function Index({ nickname }: IBlogIndexPropsType) {
  const blogData = FindBlogByNickname(nickname);
  const userData = FindMemberInfoByNickname(nickname)?.data?.[0];

  return (
    <Blog userData={userData} blogData={blogData}>
      <PostList nickname={nickname} data={blogData?.data} />
      {blogData?.data.map((value: IBoardArticleTypes, idx: number) => (
        <PostCard
          key={value.boardId}
          title={value.title}
          content={value.content}
          createdAt={value.createdAt}
          likeCount={1}
          commentCount={132}
        />
      ))}
    </Blog>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      nickname: id,
    },
  };
};

export default Index;
