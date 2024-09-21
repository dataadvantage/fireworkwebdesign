module.exports = {
	locale: "en",
	lang: "en",
	eleventyComputed: {
		eleventyNavigation: {
			locale: (data) => {
				if (data.eleventyNavigation.key !== undefined) {
					return "en";
				}
			},
		},
	},
};
