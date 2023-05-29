import React from "react";
import { Accordion, AccordionPorps } from "chayns-components";

export const AccordionWrapper = ({ children, ...props }: AccordionPorps) => {
	if (props.isWrapped) {
		return (
			<Accordion {...props}>
				<div style={{ paddingLeft: "0.5rem", paddingBottom: "0.5rem" }}>
					{children}
				</div>
			</Accordion>
		);
	}
	return <Accordion {...props} children={children} />;
};
