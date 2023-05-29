export const stringToTime = (stringTime: string) => {
	const re = /(?:([0-9]{1,2}):)?([0-9]{1,2}):([0-9]{1,2})(?:,([0-9]{1,2}))?/;
	const result = stringTime.match(re);
	let time = 0;
	if (result) {
		if (result[1]) {
			time += parseInt(result[1]) * 60 * 60;
		}

		time += parseInt(result[2]) * 60;
		time += parseInt(result[3]);

		if (result[4]) {
			time += parseInt(result[4]) * 0.01;
		}
	}
	return time;
};
