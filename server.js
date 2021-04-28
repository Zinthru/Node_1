const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");


chirpPath = path.join(__dirname, "../chirps.json");    

const chirpArray = ['Hello','Hi','Greetings','Saluatations','Welcome'];

fs.writeFile(chirpPath, JSON,stringify(chirpArray),(err) => {
    if (err) console.log(`Error: ${err}`);

    console.log(JSON.parse(chirpArray));
});



