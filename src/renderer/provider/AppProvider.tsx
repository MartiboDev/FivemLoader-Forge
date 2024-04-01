import { useEffect, useState } from "react"
import { AppContext } from "../context"

interface AppContextData {
	fivemPath: string
	preset: string
}

export default function AppProvider({ children }) {
	const [appData, setAppData] = useState<AppContextData>({
		fivemPath: "",
		preset: "",
	})

	return (
		<AppContext.Provider value={{ appData, setAppData }}>
			{children}
		</AppContext.Provider>
	)
}
