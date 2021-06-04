const  nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodemail2092@gmail.com',
        pass: 'tobiasrv'
    }
});

const mailOptions = {
    from: 'nodemail2092@gmail.com',
    to: 'rodriguezviautobias@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: `<h1>Contenido de prueba desde <span style:"color: green;">Nodemailer</span></h1>`
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err);
        return err;
    }
    console.log(info);
});
