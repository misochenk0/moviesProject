import type { NextComponentType } from "next"

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'


import AppBtn from '../AppBtn'

import styles from "./AppFilters.module.scss"
import { FunctionComponent, useEffect, useState } from 'react'



type Btn = {
	btnName: string
}

const btnsData: Btn[] = [
	{
		btnName: "Action"
	},
	{
		btnName: "Adventure"
	},
	{
		btnName: "Animation"
	},
	{
		btnName: "Biography"
	},
	{
		btnName: "Comedy"
	},
	{
		btnName: "Crime"
	},
	{
		btnName: "Documentary"
	},
	{
		btnName: "Drama"
	},
	{
		btnName: "Family"
	},
	{
		btnName: "Fantasy"
	},
	{
		btnName: "Film-Noir"
	},
	{
		btnName: "Fantasy"
	},
	{
		btnName: "Game-Show"
	},
	{
		btnName: "History"
	},
	{
		btnName: "Horror"
	},
	{
		btnName: "Music"
	},
	{
		btnName: "Musical"
	},
	{
		btnName: "Mystery"
	},
	{
		btnName: "News"
	},
	{
		btnName: "Mystery"
	},
	{
		btnName: "Reality-TV"
	},
	{
		btnName: "Romance"
	},
	{
		btnName: "Sci-Fi"
	},
	{
		btnName: "Sport"
	},
	{
		btnName: "Talk-Show"
	},
	{
		btnName: "Thriller"
	},
	{
		btnName: "War"
	},
	{
		btnName: "Western"
	},
]

type AppFiltersProps = {
	changeFilters: (name: string, value: string) => void
}

const AppFilters:FunctionComponent<AppFiltersProps> = ({changeFilters}) => {

	const [filters, setFilters] = useState<String[] | []>([])

	const change = (filter:string, status:boolean):void => {
		if(status) {
			setFilters((arr) => [...arr, filter])
		} else {
			setFilters(arr => arr.filter(item => {
				if(item === filter) {
					return null
				} else {
					return item
				}
			}))
		}		
	}

	useEffect(() => {	
		changeFilters("genres", filters.join(","))
	}, [filters])

	
	return (
		<Swiper
			scrollbar={{ draggable: true }}
			spaceBetween={15}
			className={styles.filters}
			slidesPerView={'auto'}>
			{btnsData.map((btn, idx) => (
				<SwiperSlide key={idx} className={styles.filters__btn}>
					<AppBtn btnTitle={btn.btnName} inputName="genres" changeFilter={change}/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default AppFilters