import React from "react";
import { createRoot } from "react-dom/client";
import App from "components/App";

const element = document.querySelector("#root");
if (element) {
	const root = createRoot(element);
	root.render(<App />);
}

if (process.env.NODE_ENV && process.env.NODE_ENV === "development")
	new EventSource("esbuild").addEventListener("change", () => {
		document.querySelectorAll("script").forEach((script) => {
			if (script.src.includes("assets/app.js")) {
				script.remove();
			}
		});
		const script = document.createElement("script");
		script.src = `assets/app.js?cache=${new Date().getTime()}`;
		document.querySelector("body")?.append(script);
	});
