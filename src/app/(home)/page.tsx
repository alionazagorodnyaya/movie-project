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
	1 - Создаем компонент и выносим в него moviesWrapper +
	2 - Cоздаем состояния translateActual со значением 0 +
	3 - Сохраняем блок слайдера в Ref +
	4 - Создаем Ref для хранения размера карточки
		* Обращаемся к блоку слайдера
		* Достаем его первый элемент
		* Через getComputedStyle получаем его размер
	5 - Создаем функциию для
		* движения вправо 
			* Задаю в translateActual его значение + размер карточки
	6 - Подписываюсь на нажатие стрелочек влево и впарво
		* Передаю в них соответствующие созданные функции
	7 - Добавляем атрибут style на slider и передаем туда состояние
		translateActual
*/
