const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    //connect with smtp
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: 'vella.marvin@ethereal.email',
            pass: 'hTWktfZEMhTSXE3qsD'
        }
    });

    let info = await transporter.sendMail({
        from: '"Thiru <vella.marvin@ethereal.email> ',
        to: "wannabepirateluffy@gmail.com",
        subject: "Hello word",
        text: "Hello world",
        html: "<b>Hello world</b>"
    })


    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;
