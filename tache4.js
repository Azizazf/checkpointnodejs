// 4- Dans cette tâche, vous devrez :

// Créez un fichier nommé « password-generator »  
// (utilisez npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Créez une fonction qui génère des mots de passe aléatoires et console.log() ce mot de passe.

const generatePassword = require('generate-password')

function generateRandomPassword() {



    const password = generatePassword.generate({

        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,

    });



    console.log("Votre mot de passe est :", password);


}

generateRandomPassword();