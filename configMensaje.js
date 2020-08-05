const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    console.log(formulario);
    var transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
            user: 'lmendoza@labsxd.com', // Cambialo por tu email
            pass: 'NuevoAcceso21!' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: formulario.toMail,
        to: 'lmendoza@yopmail.com', // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        text: formulario.comment
    }; 

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log('error al enviar corre: ' + err)
        else
        console.log(info);
    });
}