import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron"

const handler = {
	send(channel: string, value: unknown) {
		ipcRenderer.send(channel, value)
	},
	on(channel: string, callback: (...args: unknown[]) => void) {
		const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
			callback(...args)
		ipcRenderer.on(channel, subscription)

		return () => {
			ipcRenderer.removeListener(channel, subscription)
		}
	},
	// create a new function that will let me choose a folder
	selectFolder(pathKey) {
		return ipcRenderer.invoke("select-folder", pathKey)
	},
	changePreset(preset: string) {
		console.log(preset)
		ipcRenderer.invoke("change-fivem-preset", preset)
	},
	getFivemConfig() {
		return ipcRenderer.invoke("get-fivem-config")
	},
}

contextBridge.exposeInMainWorld("ipc", handler)

export type IpcHandler = typeof handler
