// "foo OR baz AND bar" [{"position": 0, "type": "item", "value": "foo"}, {"position": 4, "type": "binary_operator", "value": "OR"}, { "position": 7, "type": "item", "value": "baz" }, { "position": 11, "type": "binary_operator", "value": "AND" }, { "position": 15, "type": "item", "value": "bar" }]

// "some value OR other value" [{"position": 0, "type": "item", "value": "some value"}, {"position": 11, "type": "binary_operator", "value": "OR"}, {"position": 14, "type": "item", "value": "other value"}]

// const data = tokenize("foo OR baz AND bar");
const data = tokenize("some value OR other value");

data;

export function tokenize(str) {
	const map = [];

	const words = str.split(/(\w+)/);
	words;

	words.forEach((item, index) => {
		if (
			(item !== " " && words[index + 1] !== " ") ||
			(item === " " && words[index + 1] !== " ")
		) {
			item = item.trim();
		}

		console.log(item);

		if (item === "OR" || item === "AND") {
			map.push({
				position: str.indexOf(item),
				type: "binary_operator",
				value: item
			});
		} else if (item === "(") {
			map.push({
				position: str.indexOf(item),
				type: "left_bracket",
				value: "("
			});
		} else if (item === ")") {
			map.push({
				position: str.indexOf(item),
				type: "right_bracket",
				value: ")"
			});
		} else if (item === " ") {
			map.push({
				position: str.indexOf(item),
				type: "space",
				value: " "
			});
		} else {
			index;
			item;
		}
	});

	return map;
}

//----------------------------------------------------------------

// const words = str.split(/\ |\(|\)/);
// words;
// words.forEach((item, index) => {
// 	if (item === "OR" || item === "AND") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "binary_operator",
// 			value: item
// 		});
// 	} else if (item === "(") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "left_bracket",
// 			value: "("
// 		});
// 	} else if (item === ")") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "right_bracket",
// 			value: ")"
// 		});
// 	} else if (item === "") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "space",
// 			value: " "
// 		});
// 	} else {
// 		index;
// 		item;
// 	}
// });

//----------------------------------------------------------------

// 	if (
// 		item &&
// 		item !== " " &&
// 		item !== "(" &&
// 		item !== ")" &&
// 		item !== "OR" &&
// 		item !== "AND" &&
// 		words[index + 1] &&
// 		words[index + 1] !== " " &&
// 		words[index + 1] !== "(" &&
// 		words[index + 1] !== ")" &&
// 		words[index + 1] !== "AND" &&
// 		words[index + 1] !== "OR"
// 	) {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "item",
// 			value: item + " " + words[index + 1]
// 		});
// 	} else if (item === "OR" || item === "AND") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "binary_operator",
// 			value: item
// 		});
// 	} else if (item === "(") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "left_bracket",
// 			value: item
// 		});
// 	} else if (item === ")") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "right_bracket",
// 			value: item
// 		});
// 	} else if (item === " ") {
// 		map.push({
// 			position: str.indexOf(item),
// 			type: "space",
// 			value: item
// 		});
// 	}
// });
