import React from "react"
import { Header, Footer } from "./"
import { Title } from "./partials/Title"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Title title="복지편살" />
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  )
}
