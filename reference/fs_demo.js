var fs = require('fs');
var path = require('path');

/*
// Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder Created...')
});
*/

/*
// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'conteudo do texto', err => {
    if(err) throw err;
    console.log('File written to...')
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nappend file deve ser usado para adicionar mais texto, writeFile sobrescreveria o arquivo', err => {
    if(err) throw err;
    console.log('File written to...')
});
*/

/*
// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data)
});
*/

// Rename
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloRenamed.txt'), (err,data) => {
    if(err) throw err;
    console.log('File Renamed')
});