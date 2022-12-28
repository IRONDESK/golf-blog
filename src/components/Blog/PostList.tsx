import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

import { COLOR } from "../../shared/constants";
import { IBoardArticleTypes } from "../../types/BoardType";

interface IPostListPropsType {
  nickname: string;
  data: IBoardArticleTypes[];
}

function PostList({ nickname, data }: IPostListPropsType) {
  const createdAtConvertDate = (target: string) => {
    const targetDate = new Date(target);
    return new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(targetDate);
  };

  return (
    <Wrap>
      {data?.map((value, idx) => (
        <Link key={idx} href={`/${nickname}/${value.boardId}`}>
          <li>
            <p className="board-list-title">{value.title}</p>
            <p className="board-list-date">
              {createdAtConvertDate(value.createdAt)}
            </p>
          </li>
        </Link>
      ))}
    </Wrap>
  );
}

const Wrap = styled.ul`
  margin: 16px 8px 28px;
  li {
    cursor: pointer;
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLOR.border};
    .board-list-date {
      color: ${COLOR.gray};
      font-size: 0.85rem;
    }
    &:hover {
      .board-list-title {
        font-weight: 500;
      }
    }
    &:last-of-type {
      border: none;
    }
  }
`;

export default PostList;
