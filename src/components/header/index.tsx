import Link from "next/link";
import styles from "./header.module.scss";
export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				KinoKino <img src="/cinema.svg"></img>{" "}
			</div>
			<nav className={styles.header__nav}>
				<ul className={styles.header__list}>
					<li>
						<Link href={"/"}>Main Page</Link>
					</li>
					<li>
						<Link href={"/information"}>Info Page</Link>
					</li>
					<li>
						<Link href={"/search"}>Search</Link>
					</li>
					<li>
						<Link href={"/library"}>Library</Link>
					</li>
				</ul>
			</nav>
			<img src="/burger.svg" className={styles.header__burger}></img>
		</header>
	);
}
