// @ts-nocheck

// const result = buildNormalizationMap("   some other  value");
const result = buildNormalizationMap("some   other  value");
result;

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	const words = value.split(/(^ +| {2,})/g);
	words;

	const map = words
		.map((word, i, arr) => {
			word;

			if (word[0] === " " && word !== "") {
				i;
				word;

				const index = words
					.filter((word, j) => i < j)
					.reduce((counter, word) => {
						return counter;
					});

				console.log(index);

				return { length: word.length };
			}
		})
		.filter(word => word !== undefined);

	return map;
}
export function buildPositionRestorer(map) {
	return function(value) {
		return (
			value +
			map.reduce((counter, item) => {
				return (counter =
					value >= item.index && item.index === 0
						? counter + item.length
						: value >= item.index - counter
						? counter + item.length - 1
						: counter);
			}, 0)
		);
	};
}
export function normalizeTokens(tokens) {
	// return tokens;
}

// let count = 0;
// for (var i = 0; i <= value.length; i++) {
// 	if (value[i] === " ") {
// 		count++;
// 	} else {
// 		if (
// 			(count === 1 && i - 1 === 0) ||
// 			(count === 1 && i - 1 === value.length - 1) ||
// 			count > 1
// 		) {
// 			map.push({
// 				index: i - count,
// 				length: count
// 			});
// 		}
// 		count = 0;
// 	}
// }

// if (value >= item.index && item.index === 0) {
// 	counter += item.length;
// } else if (value >= item.index - counter) {
// 	counter += item.length - 1;
// }
// return counter;
