import type { NextComponentType } from "next"
import styles from "./AppNav.module.scss"

const AppNav: NextComponentType = () => {
  return (
    <nav className="header__nav">
      <ul className={styles.header__list}>
        <li className={styles.header__item}><a href="#">HOME</a></li>
        <li className={styles.header__item}><a href="#">TV SHOW</a></li>
        <li className={styles.header__item}><a href="#">MOVIES</a></li>
        <li className={styles.header__item}><a href="#">NEW</a></li>
      </ul>
    </nav>
  )
} 

export default AppNav