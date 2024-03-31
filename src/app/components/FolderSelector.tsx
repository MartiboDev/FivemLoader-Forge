import { useContext } from "react"
import { Button, Form } from "react-bootstrap"
import { AppContext } from "../context"

import styles from "./FolderSelector.module.scss"

export default function FolderSelector({ title, placeholder, pathKey }) {
	const { appData, setAppData } = useContext(AppContext)

	const selectFolder = () => {
		// window.ipc.selectFolder(pathKey).then((folderPath) => {
		// 	if (folderPath) {
		// 		setAppData({ ...appData, [pathKey]: folderPath })
		// 	}
		// })
	}

	return (
		<>
			<div className={styles.folder_selector}>
				<h5>{title}</h5>
				<div className={styles.controls}>
					<Button
						variant={appData[pathKey] === "" ? "primary" : "success"}
						onClick={selectFolder}
					>
						{appData[pathKey] === "" ? "Select" : "Change"}
					</Button>
					<Form.Control
						type="text"
						placeholder={placeholder}
						value={appData[pathKey]}
						disabled
						readOnly
					/>
				</div>
			</div>
		</>
	)
}
