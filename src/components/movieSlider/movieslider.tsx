"use client";

import { IMovie } from "@/types/movie.type";
import CardMovie from "../cardMovie";
import styles from "./movieslider.module.scss";
import { useState, useRef, useEffect } from "react";
import { transform } from "next/dist/build/swc";

interface IProps {
	moviesRnd: IMovie[];
}

export default function MovieSlider({ moviesRnd }: IProps) {
	const [translateActual, setTranslateActual] = useState(0);
	const slider = useRef<null | HTMLDivElement>(null);
	const cardWidth = useRef(0);
	const clickCount = useRef(0);
	const blockWidth = useRef(0);
	const gapWidth = useRef(0);

	useEffect(() => {
		if (slider.current) {
			const firstElement = slider.current.firstElementChild;
			if (firstElement) {
				console.log(firstElement);
				const styles = getComputedStyle(firstElement);
				const width = parseFloat(styles.width);
				const sliderStyle = getComputedStyle(slider.current);
				const gap = parseFloat(sliderStyle.gap);
				cardWidth.current = width;
				gapWidth.current = gap;
				blockWidth.current = slider.current.parentElement!.clientWidth;
			}
		}
	}, []);

	const checkMoveRight = () => {
		const sliderLength = moviesRnd.length;
		const visibleCards = Math.floor(blockWidth.current / cardWidth.current);
		if (clickCount.current < sliderLength - visibleCards) {
			return true;
		}
		return false;
	};
	const moveRight = () => {
		if (checkMoveRight()) {
			clickCount.current = clickCount.current + 1;
			setTranslateActual(
				translateActual + cardWidth.current + gapWidth.current
			);
		}
	};
	const checkMoveLeft = () => {
		const startPosition = 0;
		if (clickCount.current > startPosition) {
			return true;
		}
		return false;
	};

	const moveLeft = () => {
		if (checkMoveLeft()) {
			clickCount.current = clickCount.current - 1;
		}
		setTranslateActual(
			translateActual - cardWidth.current - gapWidth.current
		);
	};
	return (
		<div className={styles.moviesWrapper}>
			<button className={styles.arrow} onClick={moveLeft}>
				<img src="/arrow-left.svg"></img>
			</button>
			<div className={styles.movies}>
				<div
					className={styles.slider}
					ref={slider}
					style={{
						transform: `translateX(-${translateActual}px)`,
					}}
				>
					{moviesRnd.map((movie) => (
						<CardMovie movie={movie} />
					))}
				</div>
			</div>
			<button className={styles.arrow} onClick={moveRight}>
				<img src="/arrow-right.svg"></img>
			</button>
		</div>
	);
}
