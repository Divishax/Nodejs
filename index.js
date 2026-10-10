// const http = require("http");
// const fs = require("fs");
// const url = require("url");
const { console } = require("inspector");
const express = require("express");

const app = express();

app.get("/", (req,res) => {
    return res.send("Hello from home");
})
app.get("/about", (req,res) => {
    return res.send("hey" + req.query.name);
})

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server started"));
// use Express built in instead
app.listen(8000, () => console.log("Server started"));

// const myServer = http.createServer();

// who will handle webserver - kis particular request k liye kya hona chaiye 
// we nned a handler function - which can process incoming request

// const myServer = http.createServer((req, res) => {
//     // console.log("New Request Received");
//     console.log(req.headers);
//     res.end("Hello From Server")
// });

// Append Log 
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url} new req received\n`;
//     fs.appendFile("log.txt", log, (err,data) => {
//         switch(req.url) {
//             case '/': res.end("Home Page");
//             break
//             case '/about': res.end("I am divisha");
//             break
//             default: res.end("404 Not Found");
//         }
//         res.end("Hello From Server");
//     })
// });


// to run server we need port 
// myServer.listen(8000, () => console.log("Server started"));


// Removed code - migrated from Node to Express
// function myHandler(req,res){
//     const log = `${Date.now()}: ${req.method} ${req.url} new req received\n`;
//     // const myUrl = url.parse(req.url);
//     // console.log(myUrl);
//     fs.appendFile("log.txt", log, (err,data) => {
//             switch(req.url) {
//                 case '/': 
//                 if(req.method === "GET") res.end("Home Page");
//                 break
//                 case '/about': res.end("I am divisha");
//                 break
//                 case '/signup': 
//                 if(req.method === "GET") res.end("This is sign up form");
//                 else if(req.method === "POST") {
//                     // DB Query
//                     res.end("Success");
//                 }
//                 default: res.end("404 Not Found");
//             }
//             res.end("Hello From Server");
//         })
// }
// const myServer = http.createServer(myHandler);

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server started"));
