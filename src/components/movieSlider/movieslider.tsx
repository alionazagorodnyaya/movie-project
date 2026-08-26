"use client";

import { IMovie } from "@/types/movie.type";
import CardMovie from "../cardMovie";
import styles from "./movieslider.module.scss";
import { useState, useRef, useEffect } from "react";

interface IProps {
	moviesRnd: IMovie[];
}

export default function MovieSlider({ moviesRnd }: IProps) {
	const [translateActual, setTranslateActual] = useState(0);
	const slider = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		if (slider.current) {
			const firstElement = slider.current.firstElementChild;
			if (firstElement) {
				console.log(firstElement);
				const styles = getComputedStyle(firstElement);
				const width = styles.width;
				console.log(width);
			}
		}
	}, []);

	return (
		<div className={styles.moviesWrapper}>
			<button className={styles.arrow}>
				<img src="/arrow-left.svg"></img>
			</button>
			<div className={styles.movies}>
				<div className={styles.slider} ref={slider}>
					{moviesRnd.map((movie) => (
						<CardMovie movie={movie} />
					))}
				</div>
			</div>
			<button className={styles.arrow}>
				<img src="/arrow-right.svg"></img>
			</button>
		</div>
	);
}
