// @ts-nocheck

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	const map = [];
	var count = 0;
	for (var i = 0; i <= value.length; i++) {
		if (value[i] === " ") {
			count++;
		} else {
			if (
				(count === 1 && i - 1 === 0) ||
				(count === 1 && i - 1 === value.length - 1) ||
				count > 1
			) {
				map.push({ index: i - count, length: count });
			}
			count = 0;
		}
	}
	return map;
}
export function buildPositionRestorer(map) {
	return function(value) {
		var count = 0;
		map.forEach((item, index) => {
			if (value >= item.index && item.index === 0) {
				count += item.length;
			} else if (value >= item.index - count) {
				count += item.length - 1;
			}
		});
		return value + count;
	};
}
export function normalizeTokens(tokens) {}

// map.forEach((item, index) => {
// 	if (value >= item.index && item.length === 1 && index === 0) {
// 		count += item.length;
// 		count;
// 	} else if (value >= item.index) {
// 		count += item.length - 1;
// 		count;
// 	}
// });
