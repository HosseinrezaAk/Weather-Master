// npm init
// npm install express

const express = require ("express");
const https = require("https");
const app = express();





app.listen(3000, function(){
    console.log("Server started on http://localhost:3000")
});