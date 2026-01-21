(function () {
    document.addEventListener("DOMContentLoaded", function () {
        let activeLink = null;
        let intersectingEntries = new Map();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    intersectingEntries.set(entry.target.id, entry.target);
                } else {
                    intersectingEntries.delete(entry.target.id);
                }
            });

            // Find the topmost intersecting element
            if (intersectingEntries.size > 0) {
                let topmostElement = null;
                let topmostPosition = Infinity;

                intersectingEntries.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < topmostPosition) {
                        topmostPosition = rect.top;
                        topmostElement = element;
                    }
                });

                if (topmostElement) {
                    const tocLink = document.querySelector(`nav.toc a[href="#${topmostElement.id}"]`);
                    if (tocLink && tocLink !== activeLink) {
                        if (activeLink) {
                            activeLink.classList.remove("active");
                        }
                        tocLink.classList.add("active");
                        activeLink = tocLink;
                    }
                }
            }
        }, {
            threshold: 0 // Trigger when 10% of the element is visible
        });

        const headers = document.querySelectorAll("h2, h3");
        headers.forEach(header => {
            observer.observe(header);
        });
    });
})();