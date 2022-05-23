import type { NextComponentType } from "next";
import { useState, useEffect } from "react";

import { getPopularMovies } from '../../pages/api/_getMovies';

import type { MovieWithRating } from '../../types';


import AppItem from '../AppItem';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from "./AppList.module.scss"
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
				<Swiper 
					className={styles.block__list}
					scrollbar={{ draggable: true }}
					spaceBetween={40}
					slidesPerView={'auto'}>
					{moviesList.map((item, idx) => {
						if(idx < limit) {
							return (
								<SwiperSlide 	className={styles.block__list}>
									<AppItem item={item}/>
								</SwiperSlide>
							)
						}
						return null
					})}
				</Swiper>
			</div>
		</section>
	)
}

export default AppList