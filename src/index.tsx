import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/components/App";

const element = document.querySelector("#root");
if (element) {
	const root = createRoot(element);
	root.render(<App />);
}
