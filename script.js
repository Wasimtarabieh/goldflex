fetch('/assets/movies.json')
    .then(response => response.json())
    .then(data => {
        const movieId = new URLSearchParams(window.location.search).get('id');
        const movie = data.find(m => m.id == movieId);
        if (movie) {
            document.getElementById('movie-details').innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <video controls>
                    <source src="${movie.video}" type="video/mp4">
                    المتصفح الخاص بك لا يدعم عرض الفيديو.
                </video>
            `;
        } else {
            alert('الفيلم غير موجود.');
        }
    })
    .catch(error => console.error('Error fetching the movie details:', error));
