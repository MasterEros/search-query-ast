// "foo OR baz AND bar" [{"position": 0, "type": "item", "value": "foo"}, {"position": 4, "type": "binary_operator", "value": "OR"}, { "position": 7, "type": "item", "value": "baz" }, { "position": 11, "type": "binary_operator", "value": "AND" }, { "position": 15, "type": "item", "value": "bar" }]

// "some value OR other value" [{"position": 0, "type": "item", "value": "some value"}, {"position": 11, "type": "binary_operator", "value": "OR"}, {"position": 14, "type": "item", "value": "other value"}]

// const data = tokenize("foo OR baz AND bar");
const data = tokenize("some value OR other value");
data;

export function tokenize(str) {
	const tokens = [];
	let phrase = "";

	for (let i = 0; i <= str.length; i++) {
		if (str[i] === "(") {
			tokens.push({
				position: i,
				type: "left_bracket",
				value: "("
			});
		} else if (str[i] === ")") {
			tokens.push({
				position: i,
				type: "right_bracket",
				value: ")"
			});
		} else if (str[i] + str[i + 1] == "OR") {
			tokens.push({
				position: i,
				type: "binary_operator",
				value: "OR"
			});
			i += 1;
		} else if (str[i] + str[i + 1] + str[i + 2] == "AND") {
			tokens.push({
				position: i,
				type: "binary_operator",
				value: "AND"
			});
			i += 2;
		} else if (str[i] === " ") {
			if (i < str.length && str[i + 1] === " ") {
				tokens.push({
					position: i,
					type: "space",
					value: " "
				});
			}
		} else {
			let j = i;

			do {
				phrase += str[j];
				j++;
			} while (str[j + 1] !== " " && j < str.length);

			// while (str[i + 1] != " ") {
			// 	phrase += str[i];
			// 	i += 1;
			// }
			i += j - i;
		}
	}

	phrase;
	return tokens;
}

//----------------------------------------------------------------

// const words = str.split(/(\w+|\s )/);
// words.forEach((item, index) => {
// 	if (item !== " " && words[index + 1] !== " ") {
// 		item;
// 	} else {
// 		// item = item.trim();
// 	}
// 	console.log(item);
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
// 	} else if (item === " ") {
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
