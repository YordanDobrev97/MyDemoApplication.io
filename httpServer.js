const http = require('http');
const fs = require('fs');
const port = 2000;

fs.readFile('/.index.html', function(error, html){
    if(error){
        throw error;
    }

})

function httpServer(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('')
    res.end();
}

http.createServer(httpServer());