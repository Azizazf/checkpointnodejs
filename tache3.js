// 3- Dans cette tâche, vous devrez :

// Tout d'abord, demandez au système de fichiers de créer un fichier nommé « welcome.txt » contenant une ligne « Hello Node ».
// Deuxièmement, créez un programme qui lit les données console.log de hello.txt



var fs = require("fs");  //import du module 

fs.writeFile('welcome.txt', 'Hello Node ', function (err) {  // on utilise la methode fs.writeFile qui nous permets de creer 
    //le ficher contenant les donnees et une fonction avec un seul paramtre de retour (err) qui renvoie erreur en cas d'erreur

    if (err) {
        return console.log(err);

    }
     //Et pour la lecture nous allons utiliser la methode fs.readFile


    fs.readFile('welcome.txt', function (err, data) {

        if (err) {
            return console.log(err);
        }

        console.log("Votre texte est :" + data.toString());

    })


})

