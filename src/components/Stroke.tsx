import React, { ReactNode, useEffect, useState } from "react";
import { records, stroke } from "types/record";
import { Age } from "./Age";
import { Accordion, AccordionGroup } from "@chayns-components/core";

type strokesType = keyof records;

const strokes: { [key in strokesType]: string } = {
	L: "Lagen",
	F: "Freistil",
	B: "Brust",
	R: "Rücken",
	S: "Schmetterling",
};

export const Stroke = (props: {
	data: stroke;
	prevData?: stroke;
	stroke: keyof records;
	year: number;
}) => {
	const [renderData, setRenderData] = useState<ReactNode[]>();

	useEffect(() => {
		if (props.data) {
			const temp: ReactNode[] = [];
			let k: keyof stroke;
			for (k in props.data) {
				if (props.data[k] !== undefined) {
					temp.push(
						<Age
							key={k}
							data={props.data[k]}
							prevData={
								props.prevData ? props.prevData[k] : undefined
							}
							stroke={props.stroke}
							age={k}
							year={props.year}
						/>,
					);
				}
			}
			setRenderData(temp);
		}
	}, [props.data]);

	return (
		<Accordion title={`${strokes[props.stroke]}`} isWrapped>
			<AccordionGroup>{renderData}</AccordionGroup>
		</Accordion>
	);
};
