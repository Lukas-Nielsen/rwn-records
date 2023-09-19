import React from "react";
import { Records } from "./Records";
import { ColorSchemeProvider } from "@chayns-components/core";
import { useSite } from "chayns-api";

const App = () => {
	const { color, colorMode } = useSite();

	return (
		<ColorSchemeProvider color={color} colorMode={colorMode}>
			<Records />
		</ColorSchemeProvider>
	);
};

export default App;
