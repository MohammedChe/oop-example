let movie1 = {
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    genres: ['Action', 'Science Fiction', 'Adventure'],
    homepage: 'https://www.warnerbros.com/movies/inception',
    overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
    rating: 8.367,
    revenue: 825532764,
    imdb_id: 'tt1375666',

    cast: [
        {
            name: 'Leonardo DiCaprio',
            character: 'Dom Cobb',
            image: 'https://image.tmdb.org/t/p/w300/5Brc5dLifH3UInk3wUaCuGXpCqy.jpg'
        },
        {
            name: 'Joseph Gordon-Levitt',
            character: 'Arthur',
            image: 'https://image.tmdb.org/t/p/w300/z2FA8js799xqtfiFjBTicFYdfk.jpg'
        }
    ],

    getDetails(){
        return `
        Title: ${this.title}
        Genres: ${this.genres.join(', ')}
        Rating: ${this.rating}
        `;
    }
};


let show1 = {
    first_air_date: "1999-01-31",
    genres: [
        "Animation",
        "Comedy"
    ],
    overview: "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    homepage: "https://www.fox.com/family-guy",
    poster: "https://image.tmdb.org/t/p/w500/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    title: "Family Guy",
    cast: [
        {
            name: "Seth MacFarlane",
            character: "Peter Griffin / Brian Griffin / Stewie Griffin / Glenn Quagmire / Tom Tucker (voice)",
            image: "https://image.tmdb.org/t/p/w300/8oQJqM51Z0Qtdb7sE6ZfX1peNCB.jpg"
        },
        {
            name: "Alex Borstein",
            character: "Lois Griffin / Tricia Takanawa / Loretta Brown / Barbara Pewterschmidt (voice)",
            image: "https://image.tmdb.org/t/p/w300/evbCnRe5Yfuy0B41PONLTIcvbem.jpg"
        },
        {
            name: "Mila Kunis",
            character: "Meg Griffin (voice)",
            image: "https://image.tmdb.org/t/p/w300/811vCRSr9s2MFwCIOo1jWHltu3R.jpg"
        }
    ],

    getDetails(){
        return `
        Title: ${this.title}
        Genres: ${this.genres.join(', ')}
        Rating: ${this.rating}
        Overview: ${this.overview}
        `;
    }
};


let media = [movie1, show1];

console.log(media);

media.forEach((element) => {
    // console.log(element.getDetails());
    console.log(element.overview);
});
