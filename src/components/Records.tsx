import React from "react";
import { arrayRange } from "functions/arrayRange";
import { Year, gender, type } from "./Year";
import { AccordionWrapper } from "./AccordionWrapper";
import { AccordionGroup } from "@chayns-components/core";

export const Records = () => {
	const gender: gender[] = ["m", "w"];
	const type: type[] = ["k", "v"];
	const years = arrayRange(2017, new Date().getFullYear(), 1).reverse();
	return (
		<AccordionGroup>
			{gender.map((genderItem) => {
				return (
					<AccordionWrapper
						key={genderItem}
						title={genderItem === "m" ? "Männer" : "Frauen"}
						isWrapped
					>
						<AccordionGroup>
							{type.map((typeItem) => {
								return (
									<AccordionWrapper
										key={typeItem}
										title={
											typeItem === "k"
												? "Kreis"
												: "Verein"
										}
										isWrapped
									>
										<AccordionGroup>
											{years.map((year) => {
												return (
													<Year
														key={year}
														year={year}
														gender={genderItem}
														type={typeItem}
													/>
												);
											})}
										</AccordionGroup>
									</AccordionWrapper>
								);
							})}
						</AccordionGroup>
					</AccordionWrapper>
				);
			})}
		</AccordionGroup>
	);
};
