import React from "react";
import { createRoot } from "react-dom/client";
import AppWrapper from "./components/AppWrapper";

const element = document.querySelector("#root");
if (element) {
	const root = createRoot(element);
	root.render(<AppWrapper />);
}
