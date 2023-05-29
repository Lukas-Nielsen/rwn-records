import React from "react";
import { ChaynsProvider } from "chayns-api";
import App from "./App";

const AppWrapper = () => {
	return (
		<ChaynsProvider>
			<App />
		</ChaynsProvider>
	);
};

export default AppWrapper;
