import styled from "@emotion/styled"
import React from "react"
import { COLOR } from "../../shared/constants"

function PostList({ data }: any) {
  return (
    <Wrap>
      {data.map((value, idx) => (
        <li key={idx}>
          <p>{value.title}</p>
          <p>{value.lastModifiedAt}</p>
        </li>
      ))}
    </Wrap>
  )
}

const Wrap = styled.ul`
  margin: 16px 8px 28px;
  li {
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLOR.border};
    &:last-of-type {
      border: none;
    }
    p {
      &:last-of-type {
        color: ${COLOR.gray};
        font-size: 0.85rem;
      }
    }
  }
`

export default PostList
