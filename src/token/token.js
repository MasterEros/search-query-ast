// "foo OR baz AND bar" [{"position": 0, "type": "item", "value": "foo"}, {"position": 4, "type": "binary_operator", "value": "OR"}, { "position": 7, "type": "item", "value": "baz" }, { "position": 11, "type": "binary_operator", "value": "AND" }, { "position": 15, "type": "item", "value": "bar" }]

// "some value OR other value" [{"position": 0, "type": "item", "value": "some value"}, {"position": 11, "type": "binary_operator", "value": "OR"}, {"position": 14, "type": "item", "value": "other value"}]

// const data = tokenize("some value OR other value");
const data = tokenize("foo OR baz AND bar AND bey");
console.log(data);

export function tokenize(str) {
	return str
		.split(/ OR | AND /)
		.map(value => {
			return {
				position: str.indexOf(value),
				type: "item",
				value: value
			};
		})
		.concat(
			str
				.split(" ")
				.filter(binary => binary === "OR" || binary === "AND")
				.map((binary, i, arr) => {
					var position = str.indexOf(binary);
					if (arr[i] === arr[i - 1] && i > 0) {
						position = str.indexOf(binary, str.indexOf(arr[i - 1]) + 1);
					}
					return {
						position,
						type: "binary_operator",
						value: binary
					};
				})
		)
		.sort((a, b) => (a.position > b.position ? 1 : -1));
}
