import styled from "@emotion/styled"
import React from "react"
import { COLOR } from "../../shared/constants"

function Contents() {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus
      earum officia, quos sunt nihil enim accusamus esse suscipit eius fugiat
      temporibus nam cumque repellendus culpa eum doloremque voluptatem et.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
      architecto cumque? Dignissimos nemo maiores voluptatibus, sit earum
      debitis corporis doloremque repudiandae, alias labore at, iure sint eaque.
      Beatae, ex quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Cupiditate similique soluta deserunt. At nulla dolore amet esse,
      nisi suscipit ducimus, natus quasi nemo, omnis praesentium dolor
      consequuntur voluptas quos optio!
    </Container>
  )
}

const Container = styled.section`
  padding: 16px;
  width: 100%;
  background-color: ${COLOR.white};
  border-radius: 10px;
`

export default Contents
