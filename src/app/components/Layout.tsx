import Head from "next/head"
import NavigationBar from "../components/NavigationBar"
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Fivem Loader</title>
			</Head>
			<NavigationBar />
			<div className={styles.component_wrapper}>{children}</div>
		</>
	)
}
