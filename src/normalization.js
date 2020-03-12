// const value = "some   other  value".trim().replace(/\s{2,}/g, " ");
// const output = value;
// output;

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {}
export function buildPositionRestorer(map) {}
export function normalizeTokens(tokens) {}
