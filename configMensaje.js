const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    console.log(formulario);
    var transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
            user: 'childrenstherapy.21@gmail.com', // Cambialo por tu email
            pass: 'Emprendimiento!21' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: 'childrenstherapy.21@gmail.com',
        to: formulario.emailForm, // Cambia esta parte por el destinatario
        subject: formulario.asuntForm,
        text: formulario.comentForm
    }; 

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log('error al enviar corre: ' + err)
        else
        console.log(info);
    });
}