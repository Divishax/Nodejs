// console.log('hey its divisha');

// console.log(window);
// window, alert, DOM - anything ui related will thow an error.

// to call math module here we use - 'require'
// console.log(add(2,5));

const math = require("./math");
console.log(math.addFn(2,5), math.subFn(8,3));

// we can also use DESTRUCTURING 
const {addFn, subFn} = require("./math");
console.log(addFn(2,5), subFn(8,1))

// in require we have many builtin packages one being http which is used to create webservers
// fs module used for file handling 
// crypto for cryptography 