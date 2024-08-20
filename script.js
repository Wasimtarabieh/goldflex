document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/movies.json')
        .then(response => response.json())
        .then(data => {
            const categories = {
                "adults": document.querySelector('.category-adults'),
                "kids": document.querySelector('.category-kids'),
                "teens": document.querySelector('.category-teens'),
                "series": document.querySelector('.category-series')
            };

            data.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <a href="movie-details.html?id=${movie.id}">
                        <img src="${movie.image}" alt="${movie.title}">
                        <h2>${movie.title}</h2>
                        <p>${movie.description}</p>
                    </a>
                `;
                categories[movie.category].appendChild(movieElement);
            });
        });
});
