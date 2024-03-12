let movie1 = {
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    genres: ['Action', 'Science Fiction', 'Adventure'],
    homepage: 'https://www.warnerbros.com/movies/inception',
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
        `;
    }
};


// 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
// "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",


// let movie2 = {
//     title: 'Interstellar',
//     poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
//     genres: ['Adventure', 'Drama', 'Science Fiction'],
//     homepage: 'http://www.interstellarmovie.net/',
//     rating: 8.427,
//     revenue: 701729206,
//     overview:
//         'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
//     imdb_id: 'tt0816692',
//     cast: [
//         {
//             name: 'Matthew McConaughey',
//             character: 'Joseph "Coop" Cooper',
//             image: 'https://image.tmdb.org/t/p/w300/e9ZHRY5toiBZCIPEEyvOG9A8ers.jpg'
//         },
//         {
//             name: 'Anne Hathaway',
//             character: 'Dr. Amelia Brand',
//             image: 'https://image.tmdb.org/t/p/w300/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg'
//         }
//     ],

//     getDetails(){
//         return `
//         Title: ${this.title}
//         Genres: ${this.genres.join(', ')}
//         Rating: ${this.rating}
//         `;
//     }
// };

// let movie3 = {
//     title: 'The Dark Knight',
//     rating: 8.515,
//     revenue: 1004558444,
//     poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
//     genres: ['Drama', 'Action', 'Crime', 'Thriller'],
//     homepage: 'https://www.warnerbros.com/movies/dark-knight/',
//     overview:
//         'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
//     imdb_id: 'tt0468569',
//     cast: [
//         {
//             name: 'Christian Bale',
//             character: 'Bruce Wayne / Batman',
//             image: 'https://image.tmdb.org/t/p/w300/b7fTC9WFkgqGOv77mLQtmD4Bwjx.jpg'
//         },
//         {
//             name: 'Heath Ledger',
//             character: 'Joker',
//             image: 'https://image.tmdb.org/t/p/w300/p2z2bURSg7nuMsN9P2s61e2RvNz.jpg'
//         }
//     ],

//     getDetails(){
//         return `
//         Title: ${this.title}
//         Genres: ${this.genres.join(', ')}
//         Rating: ${this.rating}
//         `;
//     }
// };