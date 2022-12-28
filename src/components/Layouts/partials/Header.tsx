import Link from "next/link";
import styled from "@emotion/styled";
import { getCookie, deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";

import { IMemberDataType } from "../../../types/MemberType";
import { Logout, MemberInfo } from "../../../api/UserAuthApi";

export const Header = () => {
  const [AuthUser, setAuthUser] = useState<IMemberDataType>();
  const [triggerLogout, setTriggerLogout] = useState(false);
  const userData = MemberInfo(getCookie("accessToken") as string);
  useEffect(() => {
    setAuthUser(userData);
  }, [triggerLogout, userData]);

  const handleLogout = () => {
    Logout(getCookie("accessToken") as string).then((res) => {
      deleteCookie("accessToken");
      setTriggerLogout(!triggerLogout);
    });
  };

  return (
    <GNB>
      <Logo>
        <Link href="/">
          <img src="/Realog_logotype.svg" alt="리얼로그" />
        </Link>
      </Logo>
      {AuthUser ? (
        <Right>
          <li>
            <Link href={`/${AuthUser?.nickname}`}>
              <span>내 블로그</span>
            </Link>
          </li>
          <li>
            <Link href={`/user/post`}>
              <span>글쓰기</span>
            </Link>
          </li>
          <li>
            <button className="material-icons" onClick={handleLogout}>
              logout
            </button>
          </li>
        </Right>
      ) : (
        <Right>
          <Link href="/user/login">
            <button className="material-icons">login</button>
          </Link>
        </Right>
      )}
    </GNB>
  );
};

const GNB = styled.header`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 60px;
  top: 0;
  padding: 0 32px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  box-shadow: 0 1px 5px 0 rgba(107, 119, 172, 20%);
  z-index: 10;
`;
const Logo = styled.h1`
  img {
    cursor: pointer;
    margin: 2px 0 0 0;
    width: 80px;
  }
`;
const Right = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  span {
    cursor: pointer;
    font-size: 0.9rem;
    &:hover {
      font-weight: 500;
    }
  }
  button {
    cursor: pointer;
    padding: 8px;
    border-radius: 100%;
    font-size: 1.35rem;
    &:hover {
      background-color: #eaeaea;
    }
  }
`;
