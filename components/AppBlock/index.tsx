import type { NextComponentType } from "next"
import { useState, useEffect } from 'react'

import AppFilters from "../AppFilters"

import styles from "./AppBlock.module.scss"

import { getMoviesByAdvancedSearch } from '../../pages/api/_getMovies'

import type {options, Movie} from "../../types";
import AppItem from '../AppItem'

import AppLoader from '../AppLoader'
import AppList from '../AppList'

const AppBlock:NextComponentType = () => {

	const [options, setOptions] = useState<options | {}>({});
	const [list, setList] = useState<Movie[] | []>([])
	const [loading, setLoading] = useState<boolean>(true)

	const addOption = (name: string, value: string):void => {		
		setOptions(opt => {return {
			...opt,
			[name]: value
		}})		
	}

	const updateList = ():void => {
		setLoading(true)
		// getMoviesByAdvancedSearch(options).then(data => {
		// 	setList(data.results)
		// 	setLoading(false)
		// })
	}

	useEffect(() => {
		updateList()
	}, [options])

	useEffect(() => {
		updateList()
	}, [])
	
	return (
		<>
			<section className={styles.block}>
				<div className="container">
					<h2 className={styles.wrapper__title}>LOOK THROUGH POPULAR MOVIES</h2>
					<AppFilters changeFilters={addOption}/>
				</div>
			</section>
			<div className={styles.wrapper}>
				{
					loading ? (<AppLoader/>) : (
							<AppList moviesList={list} limit={50}/>
							)
						}
			</div>
		</>
	)
}

export default AppBlock