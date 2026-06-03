import styles from "./search.module.scss";
import Link from "next/link";
export default function Search() {
	return (
		<div className={styles.search}>
			<h2 className={styles.search__title}>
				You want to find a perfect movie?
			</h2>
			<p className={styles.search__text}>
				Our search page helps you instantly find films by title, explore
				ratings, release dates and detailed information.
			</p>
			<Link href="/search" className={styles.search__btn}>
				Search movies
			</Link>
		</div>
	);
}
