import styles from "./page.module.scss";
import { getRndTitles } from "@/utils/films";

async function getMovie(title: string) {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=a29c0636&t=${title}`
	);
	const movie = await response.json();
	console.log(movie);
	return movie;
}

async function getMoviesByTitles(titles: string[]) {
	const movies = [];
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
			<p className={styles.movies}>Home</p>
			<p>Random Movies</p>
			<div className={styles.movies__list}>
				{moviesRnd.map((movie) => (
					<div className={styles.movies__card}>
						<img
							className={styles.movies__image}
							src={movie.Poster}
						></img>
						<p className={styles.movies__title}>{movie.Title}</p>
						<p className={styles.movies__year}>
							{" "}
							Year {movie.Year}
						</p>
						<p className={styles.movies__genre}>{movie.Genre}</p>
						<p className={styles.movies__rating}>
							{" "}
							⭐️ {movie.imdbRating}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
