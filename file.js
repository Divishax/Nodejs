// file handling is to put operations on file - creating file, reading file
const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);
// Default Thread Pool size = 4 
// Max? - 8core cpu - 8 
// Nodejs has module os - it gives u ur computer information

// Write a file
// Sychronous call
// fs.writeFileSync("./test.txt", "Hello data");

// Asynchromous call
// fs.writeFile('./test.txt', 'Hello data async', (err) => {});

// Diff b/w sync and async
// this is called blocking and non blocking request
// event loop - how nodejs architechture works

// Read a file
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// // if u use sync tasks - it puts results in variable
// // if u use async tasks - it dont return results, it has callback fn
// fs.readFile("./contacts.txt", "utf-8", (err,result) => {
//     if(err){
//         console.log("Error is ", err);
//     } else{
//         console.log(result);
//     }
// })

// Append
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `${Date.now()} Hey`);

// COPY a File 
// fs.cpSync("./test.txt", "./copy.txt");

// Delete a File 
// fs.unlinkSync("./copy.txt");

// Stats of a file
// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile()); // returns true

// Create folders 
// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs/a/b", { recursive: true });

// HOW NODE JS WORKS 
// SYNC - Blocking Operation 
// console.log("1");
// // Blocking
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log("2");

// Output sync 
// 1
// Divisha Contact: 9897987978
// Kanishk Contact: 7298798789
// 2

// Make some example ASYNC - Non Blocking 
console.log("1");
fs.readFile("./contacts.txt", "utf-8", (err,result) => {
    console.log(result);
});
console.log("2");
console.log("3");
console.log("4");
// Output async
// 1
// 2
// 3
// 4
// Divisha Contact: 9897987978
// Kanishk Contact: 7298798789

// Default Thread Pool size = 4 
// Max? - 8core cpu - 8 
// Nodejs has module os - it gives u ur computer information
// refer top of file
