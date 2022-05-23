import type { NextComponentType } from "next"
import { useEffect, useState } from "react"

import {getUpcomingMovies} from "../../pages/api/_getMovies"

import type {SoloFilm} from "../../types"

import styles from "./AppBanner.module.scss";

import AppMovieInfo from '../AppMovieInfo';

const AppBanner:NextComponentType = () => {

	// let [poster, setPoster] = useState<SoloFilm | null>(null)


	useEffect(() => {
		// getUpcomingMovies().then(data => {
		// 	setPoster(data)
		// });
	}, [])

	
	return (
		<section className={styles.banner}>
			<div className="container">
				<AppMovieInfo itemId="tt0468569" infoType="main"/>
			</div>
		</section>
	)
}

export default AppBanner