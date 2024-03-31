import React, { useContext, useEffect } from "react"
import { AppContext } from "../context"

import styles from "./Home.module.scss"
import ModPreset from "../components/ModPreset"

export default function HomePage() {
	const { appData, setAppData } = useContext(AppContext)

	useEffect(() => {
		window.ipc.getFivemConfig().then((config) => {
			setAppData({
				...appData,
				fivemPath: config.fivemPath,
				preset: config.preset,
			})
			console.log(config)
		})
	}, [])

	return (
		<>
			<h3 className="mb-3">Presets</h3>
			<div className={styles.mod_preset_group}>
				<ModPreset title="Default" value="default" />
				<ModPreset title="Custom" value="custom" />
			</div>
		</>
	)
}
