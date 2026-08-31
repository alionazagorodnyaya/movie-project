import styles from "./page.module.scss";
import { getRndTitles } from "@/utils/films";
import CardMovie from "@/components/cardMovie";
import Banner from "@/components/banner";
import Search from "@/components/search";
import { getMoviesByTitles } from "@/lib/movies";
import MovieSlider from "@/components/movieSlider/movieslider";

export default async function HomePage() {
	const randomTitles = getRndTitles();
	const moviesRnd = await getMoviesByTitles(randomTitles);

	return (
		<>
			<Banner />
			<Search />
			<MovieSlider moviesRnd={moviesRnd} />
		</>
	);
}

/*
	1 - Создать ref для хранения количество нажатий
	2 - создаю функцию для проверки движения слайдера вправо
		1 создаю переменную для длины слайдера (movieRnd.length)
		2 пишу проверку которая сравнивает длину слайдера с количеством 
		нажатий 
		3 возвращать результат проверки (true/false)
	3 - После вызова функции нажатия вправо
		1 - увеличиваем ref хранящую количество нажатий
		2 - вызываем функцию из второго пункта внутри if для проверки разрешения сдвига
*/
