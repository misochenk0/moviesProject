type result = {
	Title: string,
	Year: string,
	Type: string,
	Poster: string,
	imdbID: string
}

type Rating = {
	Source: string,
	Value: string
}

export type data = {
	Response: string,
	totalResults: string,
	Search: result[]
}

export type SoloFilm  = result & {
	Rated: string,
	Released: string,
	Runtime: string,
	Genre: string,
	Director: string,
	Writer: string,
	Actors: string,
	Plot: string,
	Language: string,
	Country: string,
	Awards: string,
	Ratings: Rating[],
	Metascore: string,
	imdbRating: string,
	imdbVotes: string,
	DVD: string,
	BoxOffice: string,
	Production: string,
	Response: "True" | "False"
}