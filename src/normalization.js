// const value = "some   other  value";
// const words = normalizeString(value).split(" ");

const value = "   some other  value";

const length_value = value.length - 1;
const words = value.split(" ");

const map = [];
var counter = 0,
	index = null,
	length = null;

for (var i = 0; i < value.length; i++) {
	counter = value[i] === " " ? (counter += 1) : 0;

	// if (counter !== 0 && index === null) {
	// 	index = i;
	// 	i;
	// } else if (counter === 0 && index !== null) {
	// 	index = null;
	// 	i;
	// }

	counter;
}

length_value;
words;
map;

export function normalizeString(value) {
	return value.trim().replace(/\s{2,}/g, " ");
}
export function buildNormalizationMap(value) {
	// return [
	// 	{
	// 		index: 0,
	// 		length: 3
	// 	},
	// 	{
	// 		index: 13,
	// 		length: 2
	// 	}
	// ];
	//----------------------------------------------------------------
	// return [
	// 	{
	// 		index: 4,
	// 		length: 3
	// 	},
	// 	{
	// 		index: 12,
	// 		length: 2
	// 	}
	// ];
}
export function buildPositionRestorer(map) {}
export function normalizeTokens(tokens) {}
