import type { NextComponentType } from "next"
import { FunctionComponent, useEffect, useState } from "react"

import {getFilmById} from "../../pages/api/_getMovies"

import type {SoloFilm} from "../../types"

import styles from "./AppMovieInfo.module.scss";


type AppMovieProps = {
	itemId: string,
	infoType: "main" | "singlePage"
}

const AppMovieInfo:FunctionComponent<AppMovieProps> = ({itemId, infoType}) => {

	let [poster, setPoster] = useState<SoloFilm | null>(null)
	let [loaded, setLoaded] = useState<Boolean>(false)

	useEffect(() => {
		getFilmById(itemId).then(data => {
			setPoster(data)
		});
	}, [])

	
	return (
		<div className={styles.banner__wrapper}>
			<div className="banner__info">
				<h2 className={styles.banner__title}>{poster?.Title}</h2>
				<p className={styles.banner__description}>
					{poster?.Plot}
				</p>
				<div className={styles.genres}>
					<div className={styles.genres__title}>Genres</div>
					<p className={styles.genres__text}>
						{poster?.Genre}
					</p>
					{infoType === "main" ? <>
						<a href="#" className={styles.banner__btn}>
							Go to movie page
						</a>
					</> : null}
					<div className={styles.rating}>
						<div className={styles.rating__imdb}> Imdb {poster?.imdbRating}
						</div>
						<div className={styles.rating__year}>
							{poster?.Year}
						</div>
						<div className={styles.rating__year}>{poster?.Country}</div>
					</div>
				</div>
			</div>
			<img style={loaded ? {} : {display: "none"}} src={poster?.Poster} alt={poster?.Title} className={styles.banner__img} onLoad={() => setLoaded(true)}/>
		</div>
	)
}

export default AppMovieInfo