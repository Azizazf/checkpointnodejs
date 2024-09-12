// 2- Dans cette tâche, vous devrez :

// créer un serveur  
// Écrivez un programme qui s'exécute sur le port 3000 et répond par « <h1>Bonjour Node !!!!</h1>\n » lorsque quelqu'un atteint http://localhost:3000


var http = require("http");

const server = http.createServer(function (req,res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('<h1>Bonjour Node !!!!');

});

server.listen(3000, '127.0.0.1');
console.log("Votre serveur écoute avec le port 3000");



