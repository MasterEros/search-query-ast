export function tokenize(str) {
	return str
		.split(/ OR | AND /)
		.map((value, i, arr) => {
			var position = str.indexOf(value);
			if (arr[i] === arr[i - 1] && i > 0) {
				position = str.indexOf(value, str.indexOf(arr[i - 1]) + 1);
			}
			return {
				position,
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
