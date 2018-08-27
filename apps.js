//Template literal and default parameters
// function favMovie (movie = 'The Room', name = 'Kevin') {
//     console.log(`My name is ${name} and my favorite movie is ${movie}`)
// };
// favMovie()

//Arrow Functions
let favMovie = (movie = 'The Room', name = 'Kevin') => {console.log(`My name is ${name} and my favorite movie is ${movie}`)
};
favMovie()

getFirstName = (firstName) => (console.log(firstName));
getFirstName = firstName => (console.log(firstName));

let fullName = ('Kevin McKelvey');
name1 = fullName.split (" ");
(console.log(name1[0]));

let getStats = (a, b) => ({
    product : (a*b),
    power : Math.pow(a,b),
})
let result = getStats(4,2);
console.log(result)

// Spread Syntax
let myFunction = (a,b,c) => {
    console.log(a,b,c)
};
let myArray = ['Kevin', 'Birmingham', 'Pizza']
myFunction(... myArray);

let myName = ('Kevin')