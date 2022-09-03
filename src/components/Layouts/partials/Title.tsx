import Head from "next/head"
import { useRouter } from "next/router"

interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  const router = useRouter()
  return (
    <Head>
      <title>
        {router.pathname === "/"
          ? "아임히어 ─ I'M HERE"
          : `${title} | 아임히어`}
      </title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="Description" content="" />
      <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      <meta property="og:title" content="복지편살" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="아임히어 ─ 이야기가 있는 블로그" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="./images/ogimage.jpg" />
    </Head>
  )
}
