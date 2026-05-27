async function getMovie(title: string) {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=a29c0636&t=${title}`
	);
	const movie = await response.json();
	console.log(movie);
	return movie;
}

export default async function HomePage() {
	const movie = await getMovie("Titanic");
	const randomMovies = getRandomMovies();
	console.log(randomMovies);
	return (
		<>
			<p>Home</p>
			<div>
				<p>{movie.Title}</p>
			</div>
			<p>Random Movies</p>
			<div>
				{randomMovies.map((movie) => (
					<p>{movie}</p>
				))}
			</div>
		</>
	);
}
function getRandomMovies() {
	const movies = [
		"The Shawshank Redemption",
		"The Godfather",
		"The Dark Knight",
		"Pulp Fiction",
		"The Lord of the Rings: The Return of the King",
		"Schindler's List",
		"Fight Club",
		"Forrest Gump",
		"Inception",
		"The Matrix",
		"Goodfellas",
		"Se7en",
		"The Silence of the Lambs",
		"Interstellar",
		"The Green Mile",
		"Parasite",
		"Saving Private Ryan",
		"Life Is Beautiful",
		"Raiders of the Lost Ark",
		"Gladiator",
		"Back to the Future",
		"Terminator 2: Judgment Day",
		"The Lion King",
		"Léon: The Professional",
		"The Departed",
		"The Pianist",
		"American History X",
		"The Usual Suspects",
		"The Prestige",
		"Casablanca",
		"Django Unchained",
		"Alien",
		"Avengers: Infinity War",
		"The Shining",
		"WALL·E",
		"Joker",
		"The Dark Knight Rises",
		"Spider-Man: Into the Spider-Verse",
		"Oldboy",
		"Amélie",
		"Toy Story",
		"Braveheart",
		"Reservoir Dogs",
		"Eternal Sunshine of the Spotless Mind",
		"Requiem for a Dream",
		"Spirited Away",
		"Taxi Driver",
		"The Big Lebowski",
		"Shutter Island",
		"Catch Me If You Can",
		"The Wolf of Wall Street",
		"Mad Max: Fury Road",
		"The Grand Budapest Hotel",
		"La La Land",
		"Whiplash",
		"Star Wars: Episode V - The Empire Strikes Back",
		"Blade Runner 2049",
		"The Intouchables",
		"The Truman Show",
		"Memento",
		"Lock, Stock and Two Smoking Barrels",
		"Snatch",
		"V for Vendetta",
		"Knockin' on Heaven's Door",
		"The Sixth Sense",
		"The Thing",
		"Donnie Darko",
		"Million Dollar Baby",
		"Gran Torino",
		"Black Swan",
		"Hachi: A Dog's Tale",
		"Secret Window",
		"The Terminator",
		"Jurassic Park",
		"Titanic",
		"The Notebook",
		"Her",
		"Arrival",
		"Dune",
		"Oppenheimer",
		"Barbie",
		"Everything Everywhere All at Once",
		"Tenet",
		"Knives Out",
		"The Gentlemen",
		"Green Book",
		"Three Billboards Outside Ebbing, Missouri",
		"Get Out",
		"Logan",
		"The Hateful Eight",
		"Birdman",
		"Gone Girl",
		"Gravity",
		"12 Years a Slave",
		"Skyfall",
		"Avatar",
		"District 9",
		"The Curious Case of Benjamin Button",
		"No Country for Old Men",
		"Pan's Labyrinth",
	];

	for (let i = 0; i < movies.length; i++) {
		const maxIdx = movies.length - 1;
		const minIdx = 0;
		const randomIdx =
			Math.floor(Math.random() * (maxIdx - minIdx + 1)) + minIdx;
		const movie = movies[i];
		movies[i] = movies[randomIdx];
		movies[randomIdx] = movie;
	}
	console.log(movies.slice(0, 6));
	return movies.slice(0, 6);
}
