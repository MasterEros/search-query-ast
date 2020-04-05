// // @ts-nocheck

// const data = tokenize("some value OR other value");
// [
// [TOKEN.ITEM, "some value", 0],
// [TOKEN.BINARY_OPERATOR, "OR", 11],
// [TOKEN.ITEM, "other value", 14]
// ]
// const split = str.split(/(^ +|OR)/gm);

const TOKEN = {
	UNARY_OPERATOR: "unary_operator",
	BINARY_OPERATOR: "binary_operator",
	LEFT_BRACKET: "left_bracket",
	RIGHT_BRACKET: "right_bracket",
	SPACE: "space",
	ITEM: "item",
};
export const TOKENS = Object.values(TOKEN);
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

// const data = tokenize("foo choore OR giga bit AND baz liter");
const data = tokenize("foo OR baz AND bar");
// const data = tokenize("some value AND other value");
data;

export function tokenize(str) {
	const split = str.split(/(^ +|NOT|EXACT|OR|AND|\(|\))/g);
	split;

	return str
		.trim()
		.split(/(^ +|NOT|EXACT|OR|AND|\(|\))/g)
		.map((word, i, arr) => {
			if (word !== "") {
				word;
				const str_word = word.trim();
				const len_word = str_word.length;
				str_word;
				len_word;

				const index = arr
					.filter((word, j) => j < i)
					.reduce((counter, word) => {
						return (counter += word.length);
					}, 0);

				if (
					str_word === BINARY_OPERATOR.OR ||
					str_word === BINARY_OPERATOR.AND
				)
					return [MULTI_CHAR_TOKENS[1], str_word, index];
				else if (
					str_word === UNARY_OPERATOR.NOT ||
					str_word === UNARY_OPERATOR.EXACT
				)
					return [MULTI_CHAR_TOKENS[0], str_word, index];
				else if (str_word === LEFT_BRACKET)
					return [SINGLE_CHAR_TOKENS[0], str_word, index];
				else if (str_word === RIGHT_BRACKET)
					return [SINGLE_CHAR_TOKENS[1], str_word, index];
				else if (str_word === SPACE)
					return [SINGLE_CHAR_TOKENS[2], str_word, index];
				else {
					return ["ITEM", str_word, index];
				}
			}
		})
		.filter((result) => result !== undefined);
}
