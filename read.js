const fs = require('fs');

// A file that reads readfile.js and logs its content to the console.
fs.readFile('./readfile.js', "utf8", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});