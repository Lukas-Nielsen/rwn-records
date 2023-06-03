import React from "react";
import { Accordion, AccordionContent } from "@chayns-components/core";
import type { AccordionProps } from "@chayns-components/core/lib/components/accordion/Accordion";

export const AccordionWrapper = ({ children, ...props }: AccordionProps) => {
	if (props.isWrapped) {
		return (
			<Accordion {...props}>
				<AccordionContent>
					<div
						style={{
							paddingLeft: "0.5rem",
							paddingBottom: "0.5rem",
						}}
					>
						{children}
					</div>
				</AccordionContent>
			</Accordion>
		);
	}
	return (
		<Accordion {...props}>
			<AccordionContent children={children} />
		</Accordion>
	);
};
