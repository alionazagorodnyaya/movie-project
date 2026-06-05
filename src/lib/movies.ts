import { IMovie } from "@/types/movie.type";

export async function getMovie(title: string): Promise<IMovie> {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=a29c0636&t=${title}`
	);
	const movie: IMovie = await response.json();
	return movie;
}

export async function getMoviesByTitles(titles: string[]): Promise<IMovie[]> {
	const movies: IMovie[] = [];
	for (const title of titles) {
		movies.push(await getMovie(title));
	}
	return movies;
}
