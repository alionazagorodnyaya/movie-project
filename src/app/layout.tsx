import Header from "@/components/header";
import Banner from "@/components/banner";
import styles from "./layout.module.scss";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={styles.body}>
				<Header></Header>

				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
