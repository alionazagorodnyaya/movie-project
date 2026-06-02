import Link from "next/link";
import styles from "./cardmovie.module.scss";
import { IMovie } from "@/types/movie.type";

interface IProps {
	movie: IMovie;
}

export default function CardMovie({ movie }: IProps) {
	return (
		<Link href={`/films/${movie.Title.toLowerCase()}`}>
			<div className={styles.card}>
				<img className={styles.card__image} src={movie.Poster}></img>
				<p className={styles.card__title}>{movie.Title}</p>
				<p className={styles.card__year}> Year {movie.Year}</p>
				<p className={styles.card__genre}>{movie.Genre}</p>
				<p className={styles.card__rating}> ⭐️ {movie.imdbRating}</p>
			</div>
		</Link>
	);
}
