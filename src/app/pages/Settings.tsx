import React, { useContext } from "react"
import { AppContext } from "../context"
import FolderSelector from "../components/FolderSelector"

import styles from "./Settings.module.scss"

export default function SettingsPage() {
	const { appData, setAppData } = useContext(AppContext)

	return (
		<>
			<h3 className="mb-4">Settings</h3>
			<div className={styles.folder_selector_group}>
				<FolderSelector
					title="FiveM path"
					placeholder="FiveM path (don't recommend touching this)"
					pathKey="fivemPath"
				/>
			</div>
		</>
	)
}
