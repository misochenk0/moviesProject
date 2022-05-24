import { FunctionComponent } from "react";


import type { MovieWithRating, Movie } from '../../types'


import AppItem from '../AppItem'

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import styles from "./AppList.module.scss"

type AppListProps = {
	moviesList: MovieWithRating[] | Movie[] | [],
	limit: number,
	title?: string
}

const AppList:FunctionComponent<AppListProps> = ({moviesList, limit, title}) => {

	return (
		<section className={styles.block}>
			<div className="container">
				{title ? (<h2 className={styles.block__title}>{title}</h2>) : null}
				<Swiper 
					className={styles.block__list}
					scrollbar={{ draggable: true }}
					spaceBetween={40}
					slidesPerView={'auto'}>
					{moviesList.map((item, idx) => {
						if(idx < limit) {
							return (
								<SwiperSlide 	className={styles.block__item} key={item.id}>
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