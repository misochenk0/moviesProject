import type { NextPage } from "next"
import Head from "next/head"

import AppHeader from "../components/AppHeader"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies App</title>
      </Head>
      <AppHeader />
    </>
  )
}

export default Home