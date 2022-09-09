import styled from "@emotion/styled"

export const Footer = () => {
  return (
    <Container>
      <Image src="/Realog_logotype.svg" alt="리얼로그" />
      <Text>
        리얼로그
        <br />
        Copyright Realog, 2022.
      </Text>
    </Container>
  )
}

const Container = styled.footer`
  padding: 40px 20px 60px;
  font-weight: 300;
  font-size: 0.9rem;
  strong {
    font-size: 1.1rem;
    font-weight: 600;
  }
`

const Image = styled.img`
  width: 160px;
  opacity: 0.3;
`

const Text = styled.p`
  margin: 20px 0 0;
  line-height: 1.3rem;
`
