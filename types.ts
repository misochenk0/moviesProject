type Person = {
	id: string,
	name: string
}

type Movie = {
	id: string,
	fullTitle: string,
	title: string,
	image: string,
	imDbRating: string,
	imDbRatingCount: string,
	year: string,
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