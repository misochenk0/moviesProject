import type { NextComponentType } from "next"
import { useEffect, useState } from "react"

import {getUpcomingMovies, getPopularMovies} from "../../pages/api/_getMovies"

import type {SoloFilm, MovieWithRating} from "../../types"

import styles from "./AppBanner.module.scss";

import AppMovieInfo from '../AppMovieInfo';
import AppList from '../AppList'
import data from "../../data/popularMoviesList.json";

const AppBanner:NextComponentType = () => {

	const [moviesList, setMoviesList] = useState<MovieWithRating[] | []>([])
	const [limit, setLimit] = useState<number>(30)
	useEffect(() => {
		// getPopularMovies().then(data => {
		// 	console.log(data);
		// 	setMoviesList(data.items)
		// })
		setMoviesList(data.items)

	}, [])

	return (
		<>
			<section className={styles.banner}>
				<div className="container">
					<AppMovieInfo infoType="main"/>
				</div>
			</section>
			<AppList title="TOP MOVIES YOU MUST WATCH" moviesList={moviesList} limit={limit} />
		</>
	)
}

export default AppBanner