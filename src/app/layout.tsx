import Link from "next/link";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header>
					<div>KinoKino</div>
					<nav>
						<ul>
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
				</header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
