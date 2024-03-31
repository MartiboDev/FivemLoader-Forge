import NavigationBar from "./NavigationBar"
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
	return (
		<>
			<NavigationBar />
			<div className={styles.component_wrapper}>{children}</div>
		</>
	)
}
