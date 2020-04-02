// @ts-nocheck

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	return value
		.split(/(^ +| {2,})/g)
		.map((word, i, arr) =>
			word[0] === " " && word !== ""
				? {
						index: arr
							.filter((word, j) => j < i)
							.reduce((counter, word) => {
								return (counter += word.length);
							}, 0),
						length: word.length
				  }
				: null
		)
		.filter(result => result !== null);
}
export function buildPositionRestorer(map) {
	return value =>
		value +
		map.reduce(
			(counter, item) =>
				(counter =
					value >= item.index && item.index === 0
						? counter + item.length
						: value >= item.index - counter
						? counter + item.length - 1
						: counter),
			0
		);
}
export function normalizeTokens(tokens) {
	return tokens;
}
