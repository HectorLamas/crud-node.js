const nodemailer = require("nodemailer");

const index = (req, res)=>{
    res.render("contacto") // renderizar vista 'contacto'
}

const enviarFormulario = async (req, res)=>{
    console.log(req.body);

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
  },
});

try {
    const info = await transporter.sendMail({
        from: `"${req.body.nombreUsuario}" <${req.body.correoUsuario}>`,
        to: "bar@example.com, baz@example.com",
        subject: "Mensaje de contacto.",
        text:  req.body.areaMensaje, // plain‑text body
        html: `<em>${req.body.areaMensaje}</em>`, // HTML body
    });
    console.info(info); 
} catch (error) {
    console.error(error); //En caso de error, hay que mostrar mensaje apropiado 
}
    res.send("Enviando..");  
    // Debe haber un middleware que nos permita recuperar la información para utilizarla
    // Este middleware está en el entrypoint: index.js 
}

module.exports = {
    index,
    enviarFormulario,
}