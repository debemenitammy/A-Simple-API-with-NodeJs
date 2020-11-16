const fs = require('fs');

// A module that accepts file.js and deletes it
fs.unlink('./file.js', err => {
    if(err){
        console.log(err);
    } else {
        console.log('File successfully deleted!');
    }
});