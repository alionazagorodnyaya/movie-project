export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header>
					<h2>KinoKino</h2>
					<nav>
						<ul>
							<li>
								<a href="/">Main Page</a>
							</li>
							<li>
								<a href="/information">Info Page</a>
							</li>
							<li>
								<a href="/search">Search</a>
							</li>
							<li>
								<a href="/library">Library</a>
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
