const nodemailer = require('nodemailer');

module.exports = (contactanos) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'haivcarr@gmail.com', // Cambialo por tu email
      pass: '' // Cambialo por tu password
    }
  });

  const mailOptions = {
    from:/* `"${contactanos.nombres} 👻"  <${contactanos.email}>`,*/ 'hayleen22_btr_@hotmail.com',
    to: 'haivcarr@gmail.com', // Cambia esta parte por el destinatario
    subject: contactanos.asunto,
    html: `
          <div> 
           <p>Hola amigo</p> 
           <p>Esto es una prueba del vídeo</p> 
           <p>¿Cómo enviar correos eletrónicos con Nodemailer en NodeJS </p> 
           </div> 
       `


    /*<strong>Nombre:</strong> ${contactanos.nombres} <br/>
    <strong>Fecha de nacimiento:</strong> ${contactanos.fecha} <br/>
    <strong>E-mail:</strong> ${contactanos.email}  <br/>
    <strong>Mensaje:</strong> ${contactanos.mensaje}
    `*/
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log("Error al enviar el correo");
    else
      console.log("Correo enviado exitosamente");
  });
}


