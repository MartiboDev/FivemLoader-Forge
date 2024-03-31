import Button from "react-bootstrap/Button"
import styles from "./NavigationBar.module.scss"

import Link from "next/link"
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
			link: "/home",
			selected: true,
		},
		// {
		// 	name: "Settings",
		// 	link: "/settings",
		// 	selected: false,
		// },
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
				<Link key={index} href={item.link}>
					<span
						className={item.selected ? styles.selected : undefined}
						onClick={() => selectItem(index)}
					>
						{item.name}
					</span>
				</Link>
			))}
		</div>
	)
}
