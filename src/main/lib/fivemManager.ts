import path from "path"
import jetpack from "fs-jetpack"
import { app } from "electron"

export enum GamePreset {
	Default = "default",
	Custom = "custom",
}

export enum FivemFolders {
	Mods = "mods",
	Plugins = "plugins",
}

interface FivemManagerConfig {
	fivemPath: string
	preset: GamePreset
}

export class FivemManager {
	private _configPath: string
	private _defaultFivemPath: string

	public get config() {
		return jetpack.exists(this._configPath)
			? jetpack.read(this._configPath, "json")
			: {}
	}

	private set config(config: FivemManagerConfig) {
		jetpack.write(this._configPath, { ...config })
	}

	constructor() {
		this._configPath = path.join(app.getPath("userData"), "config.json")
		this._defaultFivemPath = jetpack
			.dir(app.getPath("appData"))
			.cwd("../Local/FiveM/FiveM.app")
			.path()
	}

	setup(fivemPath?: string) {
		this.createConfig(fivemPath)
		this.createDefaultFiles()
		this.loadPreset(this.config.preset)
	}

	private createConfig(fivemPath: string) {
		const currentConfig = this.config

		const defaultConfig: FivemManagerConfig = {
			fivemPath: fivemPath
				? fivemPath
				: currentConfig.fivemPath ?? this._defaultFivemPath,
			preset: currentConfig.preset ?? GamePreset.Default,
		}

		this.config = { ...this.config, ...defaultConfig }
	}

	// setup default fivem files
	private createDefaultFiles() {
		// setup custom folders
		jetpack.dir(path.join(this.config.fivemPath, "fivemloader"))

		// get required folders and presets
		const defaultPresets = Object.values(GamePreset)
		const fivemFolders = Object.values(FivemFolders)

		// ensures we have mods and plugins folders
		for (const preset of defaultPresets) {
			for (const folder of fivemFolders) {
				jetpack.dir(path.join(this.config.fivemPath, folder))
				jetpack.dir(
					path.join(this.config.fivemPath, `fivemloader/${preset}/${folder}`)
				)
			}
		}
	}

	changeFivemPath(fivemPath: string) {
		this.config = { ...this.config, fivemPath }
	}

	changePreset(preset: GamePreset) {
		this.config = { ...this.config, preset }
		this.loadPreset(preset)
	}

	private loadPreset(preset: GamePreset) {
		const presetPath = path.join(this.config.fivemPath, `fivemloader/${preset}`)

		const fivemFolders = Object.values(FivemFolders)

		for (const folder of fivemFolders) {
			jetpack.remove(path.join(this.config.fivemPath, folder))
			jetpack.symlink(
				path.join(presetPath, folder),
				path.join(this.config.fivemPath, folder)
			)
		}
	}
}
