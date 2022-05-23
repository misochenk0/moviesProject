
type Params = {
	s?: string,
	type?: "movie" | "series" | "episode",
	y?: number,
	page? : number
}


let url = "http://www.omdbapi.com/"
let apiKey = "b91d78fe"

export async function getMoviesByParams(
  params: Params
) {
	let requestUrl = url + `?apikey=${apiKey}`
	Object.keys(params).forEach(key => {
		requestUrl+= `&${key}=${params[key as keyof Params]}`
	})
	requestUrl = requestUrl.replace(" ", "+")
	return fetch(requestUrl).then(res => res.json())
}


export async function getFilmById(
	id: string
) {
	let requestUrl = url + `?apikey=${apiKey}` + `&i=${id}` + `&plot=full`
	return fetch(requestUrl).then(res => res.json() )
}