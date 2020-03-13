// @ts-nocheck
// const value = "some   other  value";
// const value = "   some other  value";

const value = " some other   value";
const map = buildNormalizationMap(value);
var restorer = 0;

for (let i = 0; i < map.length; i++) {
	var map_count = map[i].index + map[i].length;
	map_count;
}
restorer;
map;

// expect(restorer(0)).toBe(1);
// expect(restorer(13)).toBe(16);

// Позиция + восстановление пробелов

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	const map = [];
	for (let i = 0; i < value.length; i++) {
		if (value[i] === " ") {
			for (let j = i; j < value.length; j++) {
				if (value[j] !== " ") {
					var length = j - i;
					if (length > 1 || i === 0) {
						map.push({
							index: i,
							length: length
						});
					}
					i = j;
					break;
				}
			}
		}
	}
	return map;
}
export function buildPositionRestorer(map) {
	return function(value) {
		return map;
	};
}
export function normalizeTokens(tokens) {}

// const map = buildNormalizationMap(value);
// const map_restorer = buildPositionRestorer(map);
// const result = map_restorer(11);
// result;
