import type { NextPage } from "next";
import styled from "@emotion/styled";
import Banner from "../components/Main/Banner";
import RecentList from "../components/Main/RecentList";
import { Title } from "../components/Layouts";

const Home: NextPage = () => {
  return (
    <Main>
      <Title />
      <Banner />
      <RecentList />
    </Main>
  );
};

const Main = styled.main`
  height: 100%;
  background-color: #f6f7fa;
`;

export default Home;
