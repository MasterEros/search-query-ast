// const value = "some   other  value";
// // const words = normalizeString(value).split(" ");

// // const value = "   some other  value";
// const length_value = value.length - 1;
// const words = value.split(" ");
// const map = [];
// var index = null;

// const length_words = words.length;

// for (let i = 0; i < length_value; i++) {
// 	if (value[i] === " ") {
// 		index = i;
// 		for (let j = i; j < length_value; j++) {
// 			if (value[j] !== " ") {
// 				var length = j - i;
// 				if (length > 1) {
// 					map.push({
// 						index: i,
// 						length: length
// 					});
// 				}
// 				i = j;
// 				break;
// 			}
// 		}
// 	}
// }

// length_value;
// words;
// map;

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	const map = [];
	var index = null;
	for (let i = 0; i < value.length; i++) {
		if (value[i] === " ") {
			index = i;
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
