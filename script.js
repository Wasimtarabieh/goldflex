document.addEventListener("DOMContentLoaded", function () {
    fetch('movies.json')
        .then(response => response.json())
        .then(movies => {
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = '';

            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');

                movieElement.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                `;

                movieElement.addEventListener('click', () => {
                    window.location.href = `movie-details.html?movie=${movie.id}`;
                });

                movieContainer.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Error loading movies:', error));
});
