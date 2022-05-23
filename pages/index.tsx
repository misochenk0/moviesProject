import type { NextPage } from "next"
import Head from "next/head"
import AppBanner from '../components/AppBanner'

import AppHeader from "../components/AppHeader"
import AppList from '../components/AppList'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies App</title>
      </Head>
      <AppHeader />
      <AppBanner/>
      <AppList/>
    </>
  )
}

export default Home