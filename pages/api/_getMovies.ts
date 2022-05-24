let url = process.env.API_URL
let apiKey = process.env.API_KEY

console.log(url, apiKey);

import { options } from '../../types';

export async function getUpcomingMovies() {
	let requestUrl = url + "InTheaters/" + apiKey
	return fetch(requestUrl).then(res => res.json())
}

export async function getPopularMovies() {
	let requestUrl = url + "MostPopularMovies/" + apiKey
	return fetch(requestUrl).then(res => res.json())
}



export async function getMoviesByAdvancedSearch(options: options, defaultFilter:string = "?groups=top_1000") {
	let requestUrl = url + "AdvancedSearch/" + apiKey + (defaultFilter ? defaultFilter : "");

	Object.keys(options).forEach(item => {
		requestUrl += `&${item}=${options[item as keyof options]}`
	})
	return fetch(requestUrl).then(res => res.json())	

}