import { getMovie } from "@/lib/movies";

interface IProps {
	params: Promise<{ slug: string }>;
}
export default async function Film({ params }: IProps) {
	const { slug } = await params;
	const movie = await getMovie(decodeURIComponent(slug));

	return (
		<div>
			<div>{movie.Title}</div>
			<div>{movie.Year}</div>
		</div>
	);
}
