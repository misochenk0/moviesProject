import type { NextPage } from "next"
import Head from "next/head"
import AppBanner from '../components/AppBanner'

import AppHeader from "../components/AppHeader"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies App</title>
      </Head>
      <AppHeader />
      <AppBanner/>
    </>
  )
}

export default Home