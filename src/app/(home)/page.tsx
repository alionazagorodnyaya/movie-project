import styles from "./page.module.scss";
import { getRndTitles } from "@/utils/films";
import CardMovie from "@/components/cardMovie";
import Banner from "@/components/banner";
import Search from "@/components/search";
import { getMoviesByTitles } from "@/lib/movies";

export default async function HomePage() {
	const randomTitles = getRndTitles();
	const moviesRnd = await getMoviesByTitles(randomTitles);

	return (
		<>
			<Banner />
			<Search />
			<div className={styles.movies}>
				{moviesRnd.map((movie) => (
					<CardMovie movie={movie} />
				))}
			</div>
		</>
	);
}
