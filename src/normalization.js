// @ts-nocheck

const map = buildNormalizationMap("some   other  value");
const restorer = buildPositionRestorer(map);
const result = restorer(11);

result;

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

	// Возможно можно заменить на reduce + map
}
export function buildPositionRestorer(map) {
	return function(value) {
		// let count = 0;
		// map.forEach(item => {
		// 	if (value >= item.index && item.index === 0) {
		// 		count += item.length;
		// 	} else if (value >= item.index - count) {
		// 		count += item.length - 1;
		// 	}
		// });
		// return value + count;

		return map.reduce((counter, item) => {}, 0);
	};
}
export function normalizeTokens(tokens) {
	return tokens;
}
