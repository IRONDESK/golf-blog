import type { NextPage } from "next"
import styled from "@emotion/styled"
import Banner from "../components/Main/Banner"
import RecentList from "../components/Main/RecentList"

const Home: NextPage = () => {
  return (
    <Main>
      <Banner />
      <RecentList />
    </Main>
  )
}

const Main = styled.main`
  height: 100%;
  background-color: #f1f1f1;
`

export default Home
