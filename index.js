
// Step 1: Creating an array with initial movies
const movieCollection = ["Inception", "Interstellar", "The Matrix", "The Dark Knight"];
console.log(movieCollection); // Expected output: ["Inception", "Interstellar", "The Matrix", "The Dark Knight"]

// Step 2: Using .forEach() to display each movie
movieCollection.forEach((movie) => {
    console.log(movie); // Expected output: each movie title
});

// Step 3: Using .map() to create a new array with uppercase movie titles
const upperCaseMovies = movieCollection.map((movie) => movie.toUpperCase());
console.log(upperCaseMovies); // Expected output: ["INCEPTION", "INTERSTELLAR", "THE MATRIX", "THE DARK KNIGHT"]

// Step 4: Using .some() to check for a specific movie
const hasFavorite = movieCollection.some((movie) => movie === "Inception");
console.log(hasFavorite); // Expected output: true

// Step 5: Using .map() to create an array of movie title lengths, then using .some() to check for lengths greater than 15
const titleLengths = movieCollection.map((movie) => movie.length);
const hasLongTitle = titleLengths.some((length) => length > 15);
console.log(hasLongTitle); // Expected output: false

// Debugging common errors
console.log("Movie Collection:", movieCollection);
upperCaseMovies.forEach((movie) => console.log("Uppercase Movie:", movie));





