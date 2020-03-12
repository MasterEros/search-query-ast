// const value = "some   other  value";
// const value = "   some other  value";

const value = "some   other  value";
// const value = "some other value";
const varNormalizeString = normalizeString(value);
const varBuildNormalizationMap = buildNormalizationMap(value);

const map = [];

varBuildNormalizationMap;
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
export function buildPositionRestorer(map) {}
export function normalizeTokens(tokens) {}
