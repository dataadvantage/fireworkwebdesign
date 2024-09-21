module.exports = {
	layout: "layouts/post.njk",
	permalink: "{{ locale }}/blogs/{{ url | slug }}/index.html",
	tags: ["blog"],
};
