// // @ts-nocheck

// const data = tokenize("some value OR other value");
// [
// [TOKEN.ITEM, "some value", 0],
// [TOKEN.BINARY_OPERATOR, "OR", 11],
// [TOKEN.ITEM, "other value", 14]
// ]

const TOKEN = {
	UNARY_OPERATOR: "unary_operator",
	BINARY_OPERATOR: "binary_operator",
	LEFT_BRACKET: "left_bracket",
	RIGHT_BRACKET: "right_bracket",
	SPACE: "space",
	ITEM: "item",
};
const UNARY_OPERATOR = {
	NOT: "NOT",
	EXACT: "EXACT",
};
const UNARY_OPERATORS = Object.values(UNARY_OPERATOR);
const BINARY_OPERATOR = {
	OR: "OR",
	AND: "AND",
};
const BINARY_OPERATORS = Object.values(BINARY_OPERATOR);
const LEFT_BRACKET = "(";
const RIGHT_BRACKET = ")";
const SPACE = " ";
const SINGLE_CHAR_TOKENS = [
	TOKEN.LEFT_BRACKET,
	TOKEN.RIGHT_BRACKET,
	TOKEN.SPACE,
];
const MULTI_CHAR_TOKENS = [TOKEN.UNARY_OPERATOR, TOKEN.BINARY_OPERATOR];

export function tokenize(str) {
	// 	return str.split(/(^ +| )/g).map((word, i, arr) => {
	// 		word;
	// 		const count = arr
	// 			.filter((word, j) => j < i)
	// 			.reduce((counter, word) => (counter += word.length), word.length);
	// 		count;
	// 		Object.values(tokens)
	// 			.filter((token) => {
	// 				// typeof token === "object" ? Object.values(token) : token;
	// 			})
	// 			.map((token) => {
	// 				// token;
	// 			});
	// 	});
}
