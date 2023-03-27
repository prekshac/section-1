let myarr=['apple', 24, 78.34, false, Math];

// console.log(myarr);

const movies=['Pathaan', 'KGF', 'Farzi', 'Zero', 'Vedha', 'Fan'];

//console.log(movies[3]);

console.log(movies.at(-1));

console.log(movies.slice(1,4));

console.log(movies.slice(2));
console.log(movies.slice(2,50));

//adding elements

movies.push('Flashpoint'); //adds element to end

console.log(movies);

movies.push('Ant-man'); //adds element to start

console.log(movies);

console.log(...movies); //to extract elements
console.log(['batman', ...movies, 'inception']); //doesn't change array
// movies=['batman', ...movies, 'inception']; to permanently change array

console.log([...movies.slice(0,4), 'Jersey', ...movies.slice(5)]); // to replace any element

// to remove any element

movies.pop(); // removes last element
console.log(movies);

movies.shift() // removes first element
console.log(movies);

movies.splice(3,2);
console.log(movies);