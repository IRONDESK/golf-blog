import styled from "@emotion/styled"
import React from "react"
import ArticleCard from "./ArticleCard"

const MockData = [
  {
    title: "당신이 프론트엔드 개발자가 되기 위한 몇 가지 조건",
    content: `콘텐츠는 수익이 됩니다.

    콘텐츠가 가진 힘은 따로 이야기하지 않아도 너무나도 당연한 사실이 됐습니다. SNS, 인터넷 방송, 유투브와 같은 영상 콘텐츠 서비스, 블로그 모두 방식만 다를 뿐 자신의 이야기로 콘텐츠를 만들고, 그 콘텐츠가 가진 힘을 활용하는 매체 서비스입니다. 티스토리를 사용하시는 분들도 글이라는 일련의 설정 과정을 티스토리에서 '쉽게' 하고, 수익도 '바로' 확인할`,
    lastModifiedAt: "2022-09-03 03:23:22",
    createdBy: "나야나",
    likeCount: 0,
  },
  {
    title: "테스트용 게시판 제목",
    content:
      "테스트 게시판 내용 입니다. 테스트도 당연한 사실이 됐습니다. SNS, 인터넷 방송, 유투브와 같은 영상 콘텐츠 서비스, 블로그 모두 방식만 다를 뿐 자신의 이야기로 콘텐츠를 만들고, 그 콘텐츠가 가진 힘을 활용하",
    lastModifiedAt: "2022-09-03 03:23:22",
    createdBy: "홍길동",
    likeCount: 0,
  },
  {
    title: "테스트용 게시판 제목",
    content: "테스트 게시판 내용 입니다. 테스트 테스트",
    lastModifiedAt: "2022-09-03 03:23:22",
    createdBy: "너야너",
    likeCount: 0,
  },
  {
    title: "테스트용 게시판 제목",
    content: "테스트 게시판 내용 입니다. 테스트 테스트",
    lastModifiedAt: "2022-09-03 03:23:22",
    createdBy: "너야너",
    likeCount: 0,
  },
]

function RecentList() {
  return (
    <Container>
      <Title>지금 이 순간</Title>
      <CardWrap>
        {MockData?.map((item, index) => (
          <ArticleCard
            key={index}
            title={item.title}
            content={item.content}
            lastModifiedAt={item.lastModifiedAt}
            createdBy={item.createdBy}
            likeCount={item.likeCount}
          />
        ))}
      </CardWrap>
    </Container>
  )
}

const Container = styled.section`
  padding: 32px;
`
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`
const CardWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px 0;
  gap: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export default RecentList
