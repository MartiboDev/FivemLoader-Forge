import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import Layout from "./components/Layout"
import AppProvider from "./provider/AppProvider"
import HomePage from "./pages/Home"
import SettingsPage from "./pages/Settings"

export default function app() {
	return (
		<AppProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/settings" element={<SettingsPage />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</Layout>
			</Router>
		</AppProvider>
	)
}
