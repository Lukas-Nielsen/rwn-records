import React, { ReactNode, useEffect, useState } from "react";
import { age, records, stroke } from "types/record";
import { Record } from "./Record";
import { AccordionWrapper } from "./AccordionWrapper";

export const Age = (props: {
	data: age;
	prevData?: age;
	stroke: keyof records;
	age: keyof stroke;
	year: number;
}) => {
	const [renderData, setRenderData] = useState<ReactNode[]>();

	useEffect(() => {
		if (props.data) {
			let temp: ReactNode[] = [];
			let k: keyof age;
			for (k in props.data) {
				if (props.data[k] !== undefined) {
					temp.push(
						<Record
							key={k}
							data={props.data[k]}
							prevData={
								props.prevData ? props.prevData[k] : undefined
							}
							meters={k}
							year={props.year}
						/>
					);
				}
			}
			setRenderData(temp);
		}
	}, [props.data]);
	return (
		<AccordionWrapper
			title={
				props.age === "open" ? "offene Klasse" : `${props.age} Jahre`
			}
			isWrapped
		>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
				{renderData}
			</div>
		</AccordionWrapper>
	);
};
