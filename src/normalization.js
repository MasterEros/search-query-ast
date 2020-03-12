// const value = "some   other  value";

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
							length
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

}
export function normalizeTokens(tokens) {}
