module.exports = {
	locale: "th",
	lang: "th",
	eleventyComputed: {
		eleventyNavigation: {
			locale: (data) => {
				if (data.eleventyNavigation.key !== undefined) {
					return "th";
				}
			},
		},
	},
};
