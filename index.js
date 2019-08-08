/*const Person = require('./person');

const per1 = new Person('Gui Storti', 30);

per1.greeting();

//console.dir(person);
//console.log(person.name);
*/
/*
const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));
logger.log('Hey there!');
logger.log('Hello!');
logger.log('Sup duuud!');*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /*
    //console.log(req.url);
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 
        (err, content) =>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(content);
        });
    }
    
    if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), 
        (err, content) =>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(content);
        });
    }

    if(req.url === '/api/users'){
        const users = [
            { name: 'Bob Smith', age: 40},
            { name: 'John Doe', age: 30} 
        ];
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(JSON.stringify(users));
    }*/

    //Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' :
    req.url);
    //console.log(filePath);
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>{
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        } else {
            //Success - No errors
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));