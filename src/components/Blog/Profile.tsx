import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { COLOR } from "../../shared/constants";

import { IMemberDataType } from "../../types/MemberType";

function Profile({ userData }: { userData: IMemberDataType }) {
  return (
    <Container>
      <Link href={`/${userData?.nickname}`}>
        <Avatar />
      </Link>
      <ProfileText>
        <strong>{userData?.name}</strong>
        <p>@{userData?.nickname}</p>
      </ProfileText>
      <Follow>
        <ul>
          <li>
            <span>0</span>
            <p>Follower</p>
          </li>
          <li>
            <span>0</span>
            <p>Following</p>
          </li>
        </ul>
        <button type="button">팔로우</button>
      </Follow>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  padding: 20px 24px;
  background-color: #ffffff;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0 0 32px 12px rgba(0, 0, 0, 0.05);
  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

const Avatar = styled.p`
  margin: 0 16px 0 0;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border: 1px solid ${COLOR.border};
  border-radius: 100%;
`;
const ProfileText = styled.div`
  flex: 1;
  strong {
    display: block;
    padding: 16px 0 8px;
    font-weight: 600;
    font-size: 1.45rem;
  }
  p {
    color: ${COLOR.gray};
    font-size: 1rem;
    font-weight: 300;
  }
  @media (max-width: 640px) {
    strong {
      min-width: 100px;
    }
  }
`;
const Follow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    text-align: center;
    li {
      display: inline-block;
      margin: 0 8px;
      line-height: 1.2rem;
      span {
        font-weight: 600;
        opacity: 0.85;
      }
      p {
        font-size: 0.8rem;
        opacity: 0.45;
      }
    }
  }
  button {
    padding: 10px 0;
    background-color: ${COLOR.main};
    color: #fff;
    border-radius: 8px;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 12px 0 0;
    flex-direction: row;
    ul,
    button {
      flex: 1;
    }
  }
`;

export default Profile;
