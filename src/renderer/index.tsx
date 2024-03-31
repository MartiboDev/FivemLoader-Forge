import { createRoot } from "react-dom/client"
import App from "./App"

import "./index.scss"

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

const root = createRoot(rootElement)
root.render(<App />)

console.log("[Fivem Loader]: Launched 🚀")
