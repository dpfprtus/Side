var fs = require('fs');
fs.readFile('fileread.txt','utf8',function(err,data){
    console.log(data)
});