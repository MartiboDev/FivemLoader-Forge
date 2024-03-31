import styles from "./ModPreset.module.scss"
import { useContext } from "react"
import { AppContext } from "../context"

export default function ModPreset({ title, value }) {
	const { appData, setAppData } = useContext(AppContext)

	function changePreset(preset: string) {
		// window.ipc.changePreset(preset)
		// setAppData({ ...appData, preset })
	}

	return (
		<div
			className={`${styles.mod_preset} ${
				appData.preset === value ? styles.selected : undefined
			}`}
			onClick={() => {
				changePreset(value)
			}}
		>
			<div className={styles.content}>
				<h3>{title}</h3>
			</div>
		</div>
	)
}
