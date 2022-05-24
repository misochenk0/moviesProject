import { FunctionComponent, useEffect, useState } from "react"

import {getUpcomingMovies} from "../../pages/api/_getMovies"

import type {SoloFilm} from "../../types"

import AppLoader from '../AppLoader';

import styles from "./AppMovieInfo.module.scss";

import data from "../../data/upcomingMoviesList.json";

type AppMovieProps = {
	infoType: "main" | "singlePage"
}

const AppMovieInfo:FunctionComponent<AppMovieProps> = ({infoType}) => {

	let [poster, setPoster] = useState<SoloFilm | null>(null)
	let [loaded, setLoaded] = useState<Boolean>(false)
	let [loading, setLoading] = useState<Boolean>(true)

	useEffect(() => {
		// getUpcomingMovies().then(data => {
		// 	console.log(data);
		// 	setPoster(data.items[0])
		// 	setLoading(false)
		// }).catch(msg=> {
		// 	setLoading(false)
		// 	setPoster(data.items[1])
		// })

		setLoading(false)
		setPoster(data.items[1])
	}, [])

	
	return loading ? (<AppLoader/>) : 
			(<div className={styles.banner__wrapper}>
				<div className="banner__info">
					<h2 className={styles.banner__title}>{poster?.title}</h2>
					<p className={styles.banner__description}>
						{poster?.plot}
					</p>
					<div className={styles.genres}>
						<div className={styles.genres__title}>Genres</div>
						<p className={styles.genres__text}>
							{poster?.genres}
						</p>
						{infoType === "main" ? <>
							<a href="#" className={styles.banner__btn}>
								Go to movie page
							</a>
						</> : null}
						<div className={styles.rating}>
							<div className={styles.rating__imdb}>  {poster?.imDbRating ? "Imdb: " + poster.imDbRating : poster?.releaseState ? "Release date: " + poster.releaseState: "" }
							</div>
							<div className={styles.rating__year}>
								{poster?.year}
							</div>
							{
								poster?.runtimeMins ? (<div className={styles.rating__year}>{poster?.runtimeMins} mins</div>) : null
							}
							
						</div>
					</div>
				</div>
				<img style={loaded ? {} : {display: "none"}} src={poster?.image} alt={poster?.title} className={styles.banner__img} onLoad={() => setLoaded(true)}/>
			</div>)
}

export default AppMovieInfo