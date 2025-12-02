document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only apply smooth scroll to internal links
        if (this.hash.length > 0) {
            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// You can add more complex logic here, like a 'Scroll to Top' button or a project modal toggle.
