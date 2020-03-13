// @ts-nocheck
// const value = "some   other  value";
// const value = "   some other  value";

const value = "some   other  value";
const map = buildNormalizationMap(value);
const restorer = 11;
const map_restorer = buildPositionRestorer(map);
const result = map_restorer(11);
result;




for (let i = 0; i < map.length; i++) {
	if (map[i].index + map[i].length < restorer) {
		i;
	}
}
map;

// expect(restorer(11)).toBe(14);
// expect(restorer(7)).toBe(9);

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
					if (length > 1) {
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
