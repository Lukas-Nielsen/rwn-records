import { stringToTime } from "functions/stringToTime";
import React from "react";
import type { age, record } from "types/record";

export const Record = (props: {
	data?: record;
	prevData?: record;
	meters: keyof age;
	year: number;
}) => {
	if (props.data) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "11rem",
					padding: "0.3rem",
					background: props.data.year === props.year ? "yellow" : "",
					color: props.data.year === props.year ? "black" : "",
				}}
			>
				<strong>{props.meters} m</strong>
				<span>
					{props.data.time} (
					{props.data.year.toString().substring(2, 4)})
				</span>
				{props.prevData &&
					props.data.year > props.prevData.year &&
					(
						stringToTime(props.data.time) -
						stringToTime(props.prevData.time)
					).toFixed(2) + " Sekunden"}
				<span>{props.data.name}</span>
			</div>
		);
	}
	return null;
};
