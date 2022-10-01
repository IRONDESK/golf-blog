import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

import Blog from "../../components/Layouts/partials/Blog"
import { Title } from "../../components/Layouts/partials/Title"
import PostList from "../../components/Blog/PostList"
import PostCard from "../../components/Blog/PostCard"

function Index() {
  const router = useRouter()
  const mocking = [
    {
      title: "여기",
      lastModifiedAt: "2022-10-01",
    },
    {
      title: "오늘의 블로그 내용",
      lastModifiedAt: "2022-09-30",
    },
    {
      title: "안녕하세요 오늘의 첫 글",
      lastModifiedAt: "2022-09-26",
    },
  ]

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, autem doloremque consequatur excepturi sapiente aspernatur accusamus? Consequuntur exercitationem necessitatibus repellendus! Similique impedit assumenda provident accusantium, dolorum temporibus commodi voluptatum est.  Ipsum eos ipsa eum distinctio quis iusto doloribus dolor earum itaque deleniti nihil aliquid omnis doloremque, laborum quia praesentium maxime neque necessitatibus expedita et velit possimus? Modi ullam debitis deleniti?  Quia fugit dolore consequatur a maiores minima nemo voluptas, facere sit ut consequuntur modi molestias ipsam ea, vero, accusamus qui labore dolorum sunt. Iusto quas corrupti commodi sint. Optio, consectetur?"

  return (
    <Blog>
      <Title title={`${router.query.id}의 블로그`} />
      <Top>
        <Search>
          <input type="text" />
        </Search>
        <Link href={`/${router.query.id}/post`}>
          <Write>create</Write>
        </Link>
      </Top>
      <Wrap>
        <PostList data={mocking} />
        <PostCard
          title="제주도 여행 1일차 - 공항에 도착하다"
          content={lorem}
          createdAt="2022-09-26"
          likeCount={2233}
          commentCount={132}
        />
      </Wrap>
    </Blog>
  )
}

const Top = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Search = styled.div`
  position: relative;
  margin: 8px 8px 0;
  padding: 16px;
  width: 76px;
  border-radius: 24px;
  transition: all 0.3s;
  &:has(input:focus),
  &:hover {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.05);
  }
  &::after {
    content: "search";
    position: absolute;
    width: 24px;
    height: 24px;
    font-size: 24px;
    left: 20px;
    font-family: "Material Icons";
  }
  input {
    width: 100%;
    padding: 0 0 0 44px;
    background: none;
    font-size: 1.1rem;
    z-index: 1;
  }
`
const Write = styled.button`
  margin: 8px 8px 0;
  padding: 16px;
  border-radius: 24px;
  font-size: 24px;
  font-family: "Material Icons";
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    box-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.05);
  }
`
const Wrap = styled.section`
  margin: 8px 12px;
`

export default Index
