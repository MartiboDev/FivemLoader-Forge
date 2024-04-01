import { Link } from "react-router-dom"
import styles from "./NavigationBar.module.scss"

import { useState } from "react"

export interface NavigationItem {
	name: string
	link: string
	selected: boolean
}

export default function NavigationBar() {
	const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([
		{
			name: "Home",
			link: "/",
			selected: true,
		},
		{
			name: "Settings",
			link: "/settings",
			selected: false,
		},
	])

	function selectItem(index: number) {
		const updatedItems = navigationItems.map((item, i) => {
			item.selected = i === index
			return item
		})

		setNavigationItems(updatedItems)
	}

	return (
		<div className={styles.navigation_bar}>
			{navigationItems.map((item, index) => (
				<Link
					key={index}
					to={item.link}
					className={item.selected ? styles.selected : undefined}
					onClick={() => selectItem(index)}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}
