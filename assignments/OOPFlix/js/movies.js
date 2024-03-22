import Movie from './classes/Movie.js';

let moviesList = Movie.findAll();

console.log(moviesList);

let main = document.querySelector('#main');
console.log(main);

let moviesHTML = moviesList.map((movie, index) => {
    let movieDiv = document.createElement('div');
    movieDiv.dataset.id = index;
    movieDiv.setAttribute('class', 'movie');

    movieDiv.innerHTML = `
        <div class='movie-info'>
            <h3>${movie.title}</h3>
            <span>${movie.genres}</span>
        </div>
    `;

    // movieDiv.addEventListener('click', () => {
    //     console.log(movieDiv.dataset.id);
    //     console.log(movie.title);
    // });

    return movieDiv;
});

console.log(moviesHTML);

moviesHTML.forEach((movieDiv) => {
    main.appendChild(movieDiv);
});

main.addEventListener('click', function (event) {
    let selectedMovieDiv = event.target.closest('.movie');

    if (selectedMovieDiv !== null) {
        console.log(selectedMovieDiv);
    }
});
