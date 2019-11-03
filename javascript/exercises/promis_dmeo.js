var fs = require('fs');
fs.readFile('about_reg.js','utf8',function(err,data){
    console.log(data);
    fs.readFile('about_this.js','utf8',function(err,data){
        console.log(data);
    });
});

//promise:
// - fulfilled,rejected,notfulfilled
