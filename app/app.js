// npm init
// npm install express

const express = require ("express");
const https = require("https");
const app = express();

app.get("/", function( req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=40d5fe1720ee3ca82704129f2af71f0b#";
    https.get( url, function(){
        
    });

});



app.listen(3000, function(){
    console.log("Server started on http://localhost:3000")
});