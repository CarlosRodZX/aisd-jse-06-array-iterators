
# JavaScript Basics: Array Iterators
![Screenshot of the finished webpage](assets/images/complete.png)

## Description 📄
In this project, you will practice working with array iterators in JavaScript. You will explore the `.forEach()`, `.map()`, and `.some()` methods, understanding how to loop through arrays, transform elements, and check conditions effectively. This hands-on experience will help you appreciate the efficiency and simplicity these methods bring to your code.

## Expected Project Structure 🏗️
Your project will have the following structure:
```
ArrayIteratorsPartOne/
└── index.js
```

# Instructions ✅

## 1. **Create the Project Folder and File**
You will begin by setting up your project structure.

- [ ] Create a folder named `ArrayIteratorsPartOne` to store your project files.
- [ ] Inside the `ArrayIteratorsPartOne` folder, create a file named `index.js`. This file will contain all your JavaScript code.

## 2. **Create a Movie Collection Array**
You will start by creating an array to store a list of movies.

- [ ] In your `index.js` file, add the following code to create an array called `movieCollection` with a few initial movies:

```javascript
// Step 1: Creating an array with initial movies
const movieCollection = ["Inception", "Interstellar", "The Matrix", "The Dark Knight"];
console.log(movieCollection); // Expected output: ["Inception", "Interstellar", "The Matrix", "The Dark Knight"]
```

- [ ] Run your JavaScript file in the terminal with the command `node index.js` to see your array.

**Expected Output:**
```
[ 'Inception', 'Interstellar', 'The Matrix', 'The Dark Knight' ]
```

## 3. **Using .forEach() to Display Movies**
Next, you will learn to display all movies in your array using the `.forEach()` method.

- [ ] Update your `index.js` file with the following code:

```javascript
// Step 2: Using .forEach() to display each movie
movieCollection.forEach((movie) => {
    console.log(movie); // Expected output: each movie title
});
```

- [ ] Run your JavaScript file to see the output.

**Expected Output:**
```
Inception
Interstellar
The Matrix
The Dark Knight
```

## 4. **Creating a New Array with .map()**
Now, you will transform the movie titles into uppercase using the `.map()` method.

- [ ] Add the following code to your `index.js`:

```javascript
// Step 3: Using .map() to create a new array with uppercase movie titles
const upperCaseMovies = movieCollection.map((movie) => movie.toUpperCase());
console.log(upperCaseMovies); // Expected output: ["INCEPTION", "INTERSTELLAR", "THE MATRIX", "THE DARK KNIGHT"]
```

- [ ] Run your JavaScript file to see the new array.

**Expected Output:**
```
[ 'INCEPTION', 'INTERSTELLAR', 'THE MATRIX', 'THE DARK KNIGHT' ]
```

## 5. **Checking for a Favorite Movie with .some()**
Next, you will check if your favorite movie is in the collection using the `.some()` method.

- [ ] Update your `index.js` with the following code:

```javascript
// Step 4: Using .some() to check for a specific movie
const hasFavorite = movieCollection.some((movie) => movie === "Inception");
console.log(hasFavorite); // Expected output: true
```

- [ ] Run your JavaScript file to see the result.

**Expected Output:**
```
true
```

## 6. **Combining Array Methods**
Finally, you can combine these methods for a fun challenge. Check if any movie title is longer than 15 characters.

- [ ] Add this code to your `index.js` file:

```javascript
// Step 5: Using .some() to check for movie titles longer than 15 characters
const hasLongTitle = movieCollection.some((movie) => movie.length > 15);
console.log(hasLongTitle); // Expected output: false
```

- [ ] Run your JavaScript file to see the result.

**Expected Output:**
```
false
```

## 7. **Debugging Common Errors**
To enhance your debugging skills, add `console.log()` statements at key points in your `index.js` to track changes:

```javascript
console.log("Movie Collection:", movieCollection);
upperCaseMovies.forEach((movie) => console.log("Uppercase Movie:", movie));
```

## 8. **Test Your Knowledge**
Consider creating an array of your favorite songs, adding and removing titles, checking for specific songs, and creating subarrays based on genres.

## 9. **Commit and Push to GitHub**
Ensure you commit your work to your local Git repository and push it to GitHub.

# Conclusion 📄
In this project, you learned how to utilize the `.forEach()`, `.map()`, and `.some()` methods to work with arrays in JavaScript. You practiced displaying, transforming, and checking elements in an array, which are foundational skills for managing data in your JavaScript programs.

---

### Solution Codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:** This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-04-array-adventures/tree/solution) (link not shown).



© All rights reserved to ThriveDX