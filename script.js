document.addEventListener("DOMContentLoaded", function() {
    const movieContainers = document.querySelectorAll('.movie');

    movieContainers.forEach((container, index) => {
        const movieId = index + 1;
        fetch('assets/movies.json')
            .then(response => response.json())
            .then(data => {
                const movie = data.find(m => m.id === movieId);
                if (movie) {
                    container.querySelector('img').src = movie.image;
                    container.querySelector('span').textContent = movie.title;
                    container.addEventListener('click', () => {
                        window.location.href = `movie-details.html?id=${movie.id}`;
                    });
                }
            });
    });
});
