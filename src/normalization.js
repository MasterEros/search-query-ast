// @ts-nocheck

const map = buildNormalizationMap(" some other   value");
const restorer = buildPositionRestorer(map);
map;

const result = restorer(13); // 0 - 1, 13 - 16

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
		let restorer_position = value;
		restorer_position;

		map.forEach((item, index) => {
			if (value > item.index && value < item.index + item.length) {
				restorer_position += item.length;
				index;
			} else if (value < item.index) {
				index;
			}
		});

		restorer_position;
		map;
	};
}
export function normalizeTokens(tokens) {}
