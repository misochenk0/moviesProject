let url = "https://imdb-api.com/API/"
let apiKey = "k_4zqm2f78/"


export async function getUpcomingMovies() {
	let requestUrl = url + "InTheaters/" + apiKey
	return fetch(requestUrl).then(res => res.json())
}

export async function getPopularMovies() {
	let requestUrl = url + "MostPopularMovies/" + apiKey
	return fetch(requestUrl).then(res => res.json())
}