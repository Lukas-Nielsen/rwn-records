import React from "react";
import { Records } from "./Records";
import { ColorSchemeProvider } from "@chayns-components/core";

const App = () => {
	return (
		<ColorSchemeProvider>
			<Records />
		</ColorSchemeProvider>
	);
};

export default App;
