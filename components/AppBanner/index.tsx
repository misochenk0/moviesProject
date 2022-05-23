import type { NextComponentType } from "next"
import { useEffect, useState } from "react"

import {getUpcomingMovies} from "../../pages/api/_getMovies"

import type {SoloFilm} from "../../types"

import styles from "./AppBanner.module.scss";

import AppMovieInfo from '../AppMovieInfo';

const AppBanner:NextComponentType = () => {

	return (
		<section className={styles.banner}>
			<div className="container">
				<AppMovieInfo infoType="main"/>
			</div>
		</section>
	)
}

export default AppBanner