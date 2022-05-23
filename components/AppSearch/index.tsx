import type { NextComponentType } from "next"

import styles from "./AppSearch.module.scss"

const AppSearch:NextComponentType = () => {
  return (
    <form className={styles.search}>
      <input type="text" className={styles.search__input} placeholder="Search"/>
      <button className={styles.search__button}>
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.82844 17.1618C13.6186 17.1618 16.6912 14.0892 16.6912 10.299C16.6912 6.50883 13.6186 3.43628 9.82844 3.43628C6.03825 3.43628 2.9657 6.50883 2.9657 10.299C2.9657 14.0892 6.03825 17.1618 9.82844 17.1618Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.4069 18.8775L14.6753 15.1458" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}

export default AppSearch