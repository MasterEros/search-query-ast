// @ts-nocheck

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	const map = [];
	let count = 0;
	for (var i = 0; i <= value.length; i++) {
		if (value[i] === " ") {
			count++;
		} else {
			if (
				(count === 1 && i - 1 === 0) ||
				(count === 1 && i - 1 === value.length - 1) ||
				count > 1
			) {
				map.push({
					index: i - count,
					length: count
				});
			}
			count = 0;
		}
	}
	return map;
}
export function buildPositionRestorer(map) {
	return function(value) {
		return (
			value +
			map.reduce((counter, item) => {
				if (value >= item.index && item.index === 0) {
					counter += item.length;
				} else if (value >= item.index - counter) {
					counter += item.length - 1;
				}
				return counter;
			}, 0)
		);
	};
}
export function normalizeTokens(tokens) {
	// return tokens;
}
