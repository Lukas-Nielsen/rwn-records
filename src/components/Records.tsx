import React from "react";
import { arrayRange } from "functions/arrayRange";
import { Year, gender, type } from "./Year";
import { AccordionWrapper } from "./AccordionWrapper";

export const Records = () => {
	const gender: gender[] = ["m", "w"];
	const type: type[] = ["k", "v"];
	let years = arrayRange(2017, new Date().getFullYear(), 1).reverse();
	return (
		<>
			{gender.map((genderItem) => {
				return (
					<AccordionWrapper
						key={genderItem}
						head={genderItem === "m" ? "Männer" : "Frauen"}
						dataGroup="gender"
						isWrapped
					>
						{type.map((typeItem) => {
							return (
								<AccordionWrapper
									key={typeItem}
									head={typeItem === "k" ? "Kreis" : "Verein"}
									dataGroup="type"
									isWrapped
									removeContentClosed
								>
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
								</AccordionWrapper>
							);
						})}
					</AccordionWrapper>
				);
			})}
		</>
	);
};
