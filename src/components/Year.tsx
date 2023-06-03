import React, { ReactNode, useEffect, useState } from "react";
import { records } from "types/record";
import { Stroke } from "./Stroke";
import { AccordionWrapper } from "./AccordionWrapper";
import { AccordionGroup } from "@chayns-components/core";

export type gender = "m" | "w";
export type type = "k" | "v";

export const Year = (props: { year: number; gender: gender; type: type }) => {
	const [data, setData] = useState<records>();
	const [prevData, setPrevData] = useState<records>();
	const [renderData, setRenderData] = useState<ReactNode[]>();

	useEffect(() => {
		fetch(`./data/${props.gender}/${props.type}/${props.year}.json`)
			.then((resp) => {
				if (
					resp.status === 200 &&
					resp.headers
						.get("content-type")
						?.includes("application/json")
				) {
					return resp.json();
				}
				return undefined;
			})
			.then((json) => setData(json))
			.catch();
	}, [props]);

	useEffect(() => {
		fetch(`./data/${props.gender}/${props.type}/${props.year - 1}.json`)
			.then((resp) => {
				if (
					resp.status === 200 &&
					resp.headers
						.get("content-type")
						?.includes("application/json")
				) {
					return resp.json();
				}
				return undefined;
			})
			.then((json) => setPrevData(json))
			.catch();
	}, [props]);

	useEffect(() => {
		if (data) {
			const temp: ReactNode[] = [];
			let k: keyof records;
			for (k in data) {
				temp.push(
					<Stroke
						key={k}
						data={data[k]}
						prevData={prevData ? prevData[k] : undefined}
						stroke={k}
						year={props.year}
					/>
				);
			}
			setRenderData(temp);
		}
	}, [data]);

	if (!data) {
		return null;
	}

	return (
		<AccordionWrapper title={props.year.toString()} isWrapped>
			<AccordionGroup>{renderData}</AccordionGroup>
		</AccordionWrapper>
	);
};
