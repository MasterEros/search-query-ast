// const data = tokenize("foo OR baz AND bar");
const data = tokenize("some value OR other value");

// "foo OR baz AND bar" [{"position": 0, "type": "item", "value": "foo"}, {"position": 4, "type": "binary_operator", "value": "OR"}, { "position": 7, "type": "item", "value": "baz" }, { "position": 11, "type": "binary_operator", "value": "AND" }, { "position": 15, "type": "item", "value": "bar" }]

// "some value OR other value" [{"position": 0, "type": "item", "value": "some value"}, {"position": 11, "type": "binary_operator", "value": "OR"}, {"position": 14, "type": "item", "value": "other value"}]

export function tokenize(str) {
	const map = [];
	const words = str
		.trim()
		.replace(/\s{2,}/g, " ")
		.split(" ");

	words.forEach((item, index) => {
		if (
			item &&
			item !== "OR" &&
			item !== "AND" &&
			words[index + 1] &&
			words[index + 1] !== "OR" &&
			words[index + 1] !== "AND"
		) {
			map.push({
				position: str.indexOf(item),
				type: "item",
				value: item + " " + words[index + 1]
			});
		} else if (item === "OR" || item === "AND") {
			map.push({
				position: str.indexOf(item),
				type: "binary_operator",
				value: item
			});
		} else {
		}
	});

	map;

	// return str;
}
