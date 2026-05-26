async function getMovie(title: string) {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=a29c0636&t=${title}`
	);
	const movie = await response.json();
	console.log(movie);
	return movie;
}

export default async function HomePage() {
	const movie = await getMovie("Batman");
	return (
		<>
			<p>Home</p>
			<div>
				<p>{movie.Title}</p>
			</div>
		</>
	);
}
