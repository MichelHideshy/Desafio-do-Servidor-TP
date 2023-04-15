const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

var callback = function (request, response){
    var parts = url.parse(request.url);
    var path = parts.path;  

    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/index.html");
    } else if (parts.path == "/abertura/tipoDocx"){
        response.writeHead(200, {"Content-type": "application/msword"});
        readFile(response, "recursos/arquivo.docx");
    } else if (parts.path == "/abertura/tipoJpg"){
        response.writeHead(200, {"Content-type": "image/jpg"});
        readFile(response, "recursos/arquivo.jpg");
    } else if (parts.path == "/abertura/tipoMp3"){
        response.writeHead(200, {"Content-type": "audio/mp3"});
        readFile(response, "recursos/arquivo.mp3");
    } else if (parts.path == "/abertura/tipoMp4"){
        response.writeHead(200, {"Content-type": "video/mp4"});
        readFile(response, "recursos/arquivo.mp4");
    } else if (parts.path == "/abertura/tipojson"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "recursos/arquivo.json");
    } else if (parts.path == "/abertura/tipoMd"){
        response.writeHead(200, {"Content-type": "text/md"});
        readFile(response, "recursos/arquivo.md");
    } else if (parts.path == "/contatos"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/contato.html");
    } else if (parts.path == "/produtos"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/produto.html");
    } else if (parts.path == "/catalogo"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/catalogo.html");
    } else {
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/404.html");
    }
};

var server = http.createServer(callback);
server.listen(3000);
console.log("[SERVER - OK]... Servidor montado em http://localhost:3000");
