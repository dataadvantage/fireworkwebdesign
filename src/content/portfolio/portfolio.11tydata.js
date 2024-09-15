module.exports = {
	layout: "layouts/portfolio.njk",
	permalink: "/portfolio/{{ url | slug }}/index.html",
	tags: ["portfolio"],
	portfolioBaseUrl: "https://portfolio.fireworkwebdesign.com/",
	eleventyComputed: {
		title: (data) => `Our Work - ${data.name}`,
	},
};
