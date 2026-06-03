import styles from "./banner.module.scss";
export default function Banner() {
	return (
		<div className={styles.banner}>
			<h1 className={styles.banner__title}>
				Discover Your Next Favorite Movie!
			</h1>
			<p className={styles.banner__text}>
				Explore thousands of movies, ratings and genres. Find hidden
				gems and discover your next movie night.
			</p>

			<div className={styles.banner__image}>
				<img src="/popcorn.svg"></img>
				<img src="/star.svg"></img>

				<img src="/glasses.svg"></img>
				<img src="/film.svg"></img>
				<img src="/4k.svg"></img>
				<img src="/cup.svg"></img>
			</div>
			<div className={styles.banner__poster}>
				<img src="/poster1.jpg"></img>
				<img src="/poster2.jpg"></img>
				<img src="/poster3.jpg"></img>
			</div>
		</div>
	);
}
