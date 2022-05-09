exports.sendEmail = () => {
    var nodemailer = require('../node_modules/nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'premier.webprogrammer@gmail.com',
            pass: 'p0847217065R'
        }
    });

    var mailOptions = {
        from: 'premier.webprogrammer@gmail.com',
        to: 'support3@premierthailand.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

exports.FormEmail = (part) => {
    var UploadForm = `
    <form action="${part}" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">
    </form>
    `
    return UploadForm;
};