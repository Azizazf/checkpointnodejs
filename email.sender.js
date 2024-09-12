// 5- Dans cette tâche, vous devrez :

// créer un fichier nommé email-sender  
// npm installer nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Essayez de vous envoyer un e-mail en utilisant ceci

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'votre-email@gmail.com ',
        pass: 'Votre de passe '
    }


});

//options de l'email

let mailOptions = {
    from: 'votre-email@gmail.com',
    to: 'destination-email@gmail.com',
    subject: 'essai Nodemailler',
    text: ' ' // contenu de l'email
};

// envoie de l'email

transporter.sendMail(mailOptions, function (error, info) {

    if (error) {

        console.log('erreur:', error);

    } else {

        console.log('Email envoyé:', info.reponse);

    }
});





