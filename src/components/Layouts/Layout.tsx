import React from "react"
import { Header, Footer } from "./"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
