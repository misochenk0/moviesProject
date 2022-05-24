type Person = {
	id: string,
	name: string
}

export type Movie = {
	id: string,
	fullTitle: string,
	title: string,
	image: string,
	imDbRating: string,
	imDbRatingCount: string,
	year: string,
}
export type options = {
	genres?: string,
	title?: string,
	release_date?: number,
	user_rating?: string,
	count?: number
}

export type SoloFilm = Movie & {
	contentRating: string,
	directorList: Person[],
	genres: string,
	metacriticRating: string,
	plot: string,
	releaseState: string,
	runtimeMins: string,
	starList: Person[],
}

export type MovieWithRating = Movie & {
	rank: string,
	rankUpDown: string
}