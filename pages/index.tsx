import type { NextPage } from "next"
import Head from "next/head"
import AppBanner from '../components/AppBanner'
import AppBlock from '../components/AppBlock'

import AppHeader from "../components/AppHeader"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies App</title>
      </Head>
      <AppHeader />
      <AppBanner/>
      <AppBlock/>
    </>
  )
}

export default Home