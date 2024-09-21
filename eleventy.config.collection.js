module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("field", (array, field) => {
		const result = array.map((i) => {
			if (i.data !== undefined) {
				return i.data[field];
			}
			return i[field];
		});
		return result;
	});

	eleventyConfig.addFilter("filter", (array, field, value) => {
		return array.filter((i) => {
			if (i.data !== undefined) {
				return i.data[field] === value;
			}
			return i[field] === value;
		});
	});

	eleventyConfig.addFilter("unique", (array) => {
		return [...new Set(array)];
	});

	eleventyConfig.addFilter("sort", (array, key, ascending = true) => {
		if (ascending) {
			return array.sort((a, b) => {
				if (a.data[key] > b.data[key]) {
					return 1;
				}
				return -1;
			});
		} else {
			return array.sort((a, b) => {
				if (a.data[key] > b.data[key]) {
					return -1;
				}
				return 1;
			});
		}
	});
};
