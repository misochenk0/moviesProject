
// type Params = {
// 	s?: string,
// 	type?: "movie" | "series" | "episode",
// 	y?: number,
// 	page? : number
// }


let url = "https://imdb-api.com/API/"
let apiKey = "k_4zqm2f78/"

// export async function getMoviesByParams(
//   params: Params
// ) {
// 	let requestUrl = url + `?apikey=${apiKey}`
// 	Object.keys(params).forEach(key => {
// 		requestUrl+= `&${key}=${params[key as keyof Params]}`
// 	})
// 	requestUrl = requestUrl.replace(" ", "+")
// 	return fetch(requestUrl).then(res => res.json())
// }

export async function getUpcomingMovies() {
	let requestUrl = url + "ComingSoon/" + apiKey
	return fetch(requestUrl).then(res => res.json())
}

export async function getFilm(
	id:string = ""
) {
	let requestUrl = url + + apiKey + `&i=${id}` + `&plot=full`

	return fetch(requestUrl).then(res => res.json() )
}