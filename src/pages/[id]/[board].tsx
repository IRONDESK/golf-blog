import React from "react";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";

import { FindByBoardId } from "../../api/BoardApi";
import Blog from "../../components/Layouts/Blog";
import PostCard from "../../components/Blog/PostCard";
import { FindMemberInfoByNickname } from "../../api/MemberApi";

interface IBoardArticlePropsType {
  nickname: string;
  boardId: string;
}

function Board({ nickname, boardId }: IBoardArticlePropsType) {
  const BoardData = FindByBoardId(boardId);
  const userData = FindMemberInfoByNickname(nickname)?.data?.[0];

  return (
    <Blog userData={userData} blogData={[]}>
      <PostCard
        key={BoardData?.boardId}
        title={BoardData?.title}
        content={BoardData?.content}
        createdAt={BoardData?.lastModifiedAt}
        likeCount={1}
        commentCount={132}
      />
    </Blog>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, board } = context.query;

  return {
    props: {
      nickname: id,
      boardId: board,
    },
  };
};

export default Board;
