import type { NextComponentType } from "next"

import AppNav from "../AppNav"
import AppSearch from "../AppSearch"
import AppSettings from "../AppSettings"

import styles from "./AppHeader.module.scss"

const AppHeader: NextComponentType = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <a href="#" className={styles.header__logo}>MoviesApp</a>
          <AppNav/>
          <AppSearch/>
          <AppSettings/>
        </div>
      </div>
    </header>
  )
}

export default AppHeader