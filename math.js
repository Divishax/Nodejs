// to split the codebase we use modules - modular programming
// all math related will be in this module 
function add(a,b){
    return a + b;
};
// this is private, we need to export it to make it public

// math value will be string divisha 
// module.exports = 'divisha';

// module.exports = add;

// we need 1 more fun 
function sub(a,b){
    return a-b;
}
// how we will add second function to module exports - using objects
// module.exports = {
//     add,
//     sub
// }

// we can even rename it 
module.exports = {
    addFn: add,
    subFn: sub
}

// SECOND Method - use Export Objects 
// exports.add1 = (a,b) => a + b;
// exports.sub2 = (a,b) => a - b;

// Diff b/w Methods 
// module.exports can be used only once as it overwrites
// exports. can be used as many  times