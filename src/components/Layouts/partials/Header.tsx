import Link from "next/link"
import { useRouter } from "next/router"
import styled from "@emotion/styled"

export const Header = () => {
  return (
    <GNB>
      <Left>
        <Link href="/">
          <Image src="/Realog_logotype.svg" alt="리얼로그" />
        </Link>
      </Left>
      <Right>
        <p className="material-icons">dynamic_feed</p>
        <p className="material-icons">add_circle_outline</p>
        <Link href="/user/login">
          <p className="material-icons">login</p>
        </Link>
      </Right>
    </GNB>
  )
}

const GNB = styled.ul`
  display: flex;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
`
const Left = styled.li``
const Image = styled.img`
  cursor: pointer;
  margin: 2px 0 0 0;
  width: 108px;
`
const Right = styled.li`
  display: flex;
  gap: 8px;
  p {
    cursor: pointer;
    padding: 12px;
    border-radius: 100%;
    font-size: 1.45rem;
    &:hover {
      background-color: #eaeaea;
    }
  }
`
