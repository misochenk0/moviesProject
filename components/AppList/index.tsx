import type { NextComponentType } from "next";
import { useState, useEffect } from "react";

import { getPopularMovies } from '../../pages/api/_getMovies';

import type { MovieWithRating } from '../../types';

import styles from "./AppList.module.scss"

import AppItem from '../AppItem';

const AppList:NextComponentType = () => {
	

	const [moviesList, setMoviesList] = useState<MovieWithRating[] | []>([])

	const [limit, setLimit] = useState<Number>(10)

	useEffect(() => {
		getPopularMovies().then(data => {
			console.log(data);
			setMoviesList(data.items)
		})
	}, [])

	return (
		<section className={styles.block}>
			<div className="container">
				<h2 className={styles.block__title}>TOP MOVIES YOU MUST WATCH</h2>
				<div className={styles.block__list}>
					{moviesList.map((item, idx) => {
						if(idx < limit) {
							return (
								<AppItem item={item}/>
							)
						}
						return null
					})}
				</div>
			</div>
		</section>
	)
}

export default AppList