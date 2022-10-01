import React from "react"
import { useRouter } from "next/router"
import { Header, Footer } from "./"

export const Layout = ({ children }: any) => {
  const router = useRouter()
  return (
    <>
      {router.query.id ? null : <Header />}
      {children}
      <Footer />
    </>
  )
}
