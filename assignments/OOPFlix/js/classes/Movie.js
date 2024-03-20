import DB from './DB.js';

class Movie {
    constructor(_data) {
        this.title = _data.title;
        this.poster = _data.poster;
        this.genres = _data.genres;
        this.website = _data.homepage;
        this.overview = _data.overview;
        this.imdb_id = _data.imdb_id;
        this.rating = _data.rating;
        this.cast = _data.cast;
        this.revenue = _data.revenue;
    }

    static findAll() {
        let db = new DB();
        let data = db.getMovieData();

        let movies = data.map((dataObj) => new Movie(dataObj));

        return movies;
    }

    getDetails() {
        return `
        Title: ${this.title}
        Poster: ${this.poster}
        Genres: ${this.genres}
        `;
    }
}

export default Movie;
