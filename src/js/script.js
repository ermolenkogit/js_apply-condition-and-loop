'use strict';

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt('One of the last movies you watched?', ''),
		b = prompt('How much would you rate it?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Not many movies watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("You're a classic viewer");
} else if (personalMovieDB.count >= 30) {
	console.log("You're a movie buff");
} else {
	console.log('There was an error');
}

console.log(personalMovieDB);
