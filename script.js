document.addEventListener('DOMContentLoaded', function() {
    const movies = [];
    
    // Example data to simulate large dataset
    for (let i = 1; i <= 1000; i++) {
        movies.push({ title: `Movie ${i}`, description: `Description of Movie ${i}`, image: 'https://via.placeholder.com/150x200' });
    }

    const movieContainer = document.getElementById('movie-container');
    const searchBar = document.getElementById('search-bar');

    function displayMovies(filteredMovies) {
        movieContainer.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <button class="details-btn">عرض التفاصيل</button>
            `;

            movieContainer.appendChild(movieCard);
        });
    }

    function filterMovies(query) {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
        displayMovies(filteredMovies);
    }

    searchBar.addEventListener('input', () => {
        const query = searchBar.value;
        filterMovies(query);
    });

    displayMovies(movies);
});