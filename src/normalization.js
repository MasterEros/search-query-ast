// @ts-nocheck
// const value = "some   other  value";
// const value = " some other   value ";
// const value = "   some  some     value  some ";

// const value = " some other   value ";
// const map = buildNormalizationMap(value);

const map = buildNormalizationMap("some   other  value");
const restorer = buildPositionRestorer(map);
const result = restorer(11);
result;

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
		return map;
	};
}
export function normalizeTokens(tokens) {}

// const map = buildNormalizationMap(value);
// const map_restorer = buildPositionRestorer(map);
// const result = map_restorer(11);
// result;

// for (let i = 0; i < value.length; i++) {
// 	if (value[i] === " ") {
// 		for (let j = i; j < value.length; j++) {
// 			if (value[j] !== " ") {
// 				var length = j - i;
// 				length;
// 				if (length === 1 && i === 0) {
// 					i;
// 				} else if (length === 1 && i === value.length - 1) {
// 					i;
// 				} else if (length > 1) {
// 					map.push({
// 						index: i,
// 						length: length
// 					});
// 					i = j;
// 				}
// 				break;
// 			}
// 		}
// 	}
// }

// const words = value.split(" ");
// words;
// // Сравнение строк и использование normalizeString + indexOf + IndexFirstOf
// var count = 0;
// for (let index in words) {
// 	const numindex = Number(index);
// 	const word_length = words[numindex].length;
// 	if (word_length === 0 && words[numindex] !== words[numindex + 1]) {
// 		// count;
// 		// count = index - count + 1;
// 		// count;
// 	} else if (word_length === 0 && words[numindex] !== words[numindex - 1]) {
// 		index;
// 		// count = index;
// 	}
// }

// const value = "some   other  value";
// const value = "   some other  value";
// var restorer = 0;
// for (let i = 0; i < map.length; i++) {
// 	var map_count = map[i].index + map[i].length;
// 	map_count;
// }
// restorer;
// expect(restorer(0)).toBe(1);
// expect(restorer(13)).toBe(16);
// Позиция + восстановление пробелов
