// // @ts-nocheck
const TOKEN = {
	UNARY_OPERATOR: "unary_operator",
	BINARY_OPERATOR: "binary_operator",
	LEFT_BRACKET: "left_bracket",
	RIGHT_BRACKET: "right_bracket",
	SPACE: "space",
	ITEM: "item"
};
const TOKENS = Object.values(TOKEN);
const UNARY_OPERATOR = {
	NOT: "NOT",
	EXACT: "EXACT"
};
const UNARY_OPERATORS = Object.values(UNARY_OPERATOR);
const BINARY_OPERATOR = {
	OR: "OR",
	AND: "AND"
};
const BINARY_OPERATORS = Object.values(BINARY_OPERATOR);
const LEFT_BRACKET = "(";
const RIGHT_BRACKET = ")";
const SPACE = " ";
const SINGLE_CHAR_TOKENS = [
	TOKEN.LEFT_BRACKET,
	TOKEN.RIGHT_BRACKET,
	TOKEN.SPACE
];
const MULTI_CHAR_TOKENS = [TOKEN.UNARY_OPERATOR, TOKEN.BINARY_OPERATOR];

const tokens = {
	UNARY_OPERATORS,
	BINARY_OPERATORS,
	LEFT_BRACKET,
	RIGHT_BRACKET,
	SPACE
};

const tokensis = Object.values(tokens)
	.map(([left, right]) => left || right)
	.filter(token => token !== undefined);

tokensis;

console.log(tokens);

const data = tokenize("foo OR baz AND bar");
data;

export function tokenize(str) {
	return str.split(/(^ +| )/g).map((word, i, arr) => {
		word;

		const count = arr
			.filter((word, j) => j < i)
			.reduce((counter, word) => (counter += word.length), word.length);

		count;

		Object.values(tokens)
			.filter(token => {
				// typeof token === "object" ? Object.values(token) : token;
			})
			.map(token => {
				// token;
			});
	});
}

// return str
// 	.split(/ OR | AND /)
// 	.map((value, i, arr) => {
// 		var position = str.indexOf(value);
// 		if (arr[i] === arr[i - 1] && i > 0) {
// 			position = str.indexOf(value, str.indexOf(arr[i - 1]) + 1);
// 		}
// 		return {
// 			position,
// 			type: "item",
// 			value: value
// 		};
// 	})
// 	.concat(
// 		str
// 			.split(" ")
// 			.filter(binary => binary === "OR" || binary === "AND")
// 			.map((binary, i, arr) => {
// 				var position = str.indexOf(binary);
// 				if (arr[i] === arr[i - 1] && i > 0) {
// 					position = str.indexOf(binary, str.indexOf(arr[i - 1]) + 1);
// 				}
// 				return {
// 					position,
// 					type: "binary_operator",
// 					value: binary
// 				};
// 			})
// 	)
// 	.sort((a, b) => (a.position > b.position ? 1 : -1));

// const {
// 	TOKENS,
// 	UNARY_OPERATORS,
// 	BINARY_OPERATORS,
// 	LEFT_BRACKET,
// 	RIGHT_BRACKET,
// 	SPACE,
// 	TOKEN
// } = require("./constants");
