import Link from "next/link";
import styles from "./page.module.scss";
import { getRndTitles } from "@/utils/films";
import CardMovie from "@/components/cardMovie";
import { IMovie } from "@/types/movie.type";

async function getMovie(title: string): Promise<IMovie> {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=a29c0636&t=${title}`
	);
	const movie: IMovie = await response.json();
	return movie;
}

async function getMoviesByTitles(titles: string[]): Promise<IMovie[]> {
	const movies: IMovie[] = [];
	for (const title of titles) {
		movies.push(await getMovie(title));
	}
	return movies;
}

export default async function HomePage() {
	const randomTitles = getRndTitles();
	const moviesRnd = await getMoviesByTitles(randomTitles);

	return (
		<>
			<p>Home</p>
			<p>Random Movies</p>
			<div className={styles.movies}>
				{moviesRnd.map((movie) => (
					<CardMovie movie={movie} />
				))}
			</div>
		</>
	);
}
