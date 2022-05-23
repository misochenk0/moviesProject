// type result = {
// 	Title: string,
// 	Year: string,
// 	Type: string,
// 	Poster: string,
// 	imdbID: string
// }

// type Rating = {
// 	Source: string,
// 	Value: string
// }

// export type data = {
// 	Response: string,
// 	totalResults: string,
// 	Search: result[]
// }

type Person = {
	id: string,
	name: string
}

export type SoloFilm = {
	contentRating: string,
	directorList: Person[],
	fullTitle: string,
	genres: string,
	id: string,
	imDbRating: string,
	imDbRatingCount: string,
	image: string,
	metacriticRating: string,
	plot: string,
	releaseState: string,
	runtimeMins: string,
	starList: Person[],
	year: string,
	title: string
}