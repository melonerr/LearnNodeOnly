exports.UploadFile = (req) => {
    //  modules
    var formidable = require('../node_modules/formidable');
    var mv = require('../node_modules/mv');

    // 
    var form = new formidable.IncomingForm();
    var todayDate = new Date().toISOString().slice(0, 10);
    form.parse(req, function(err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var fileType = "." + files.filetoupload.originalFilename.split('.').pop()
        var newpath = './assets/file/' + "file-" + todayDate + "-" + makeid(8) + fileType;
        mv(oldpath, newpath, function(err) {
            if (err) throw `Error: Can't uploadfile!<br><a href="./"><input type="submit" value="home"></a>`;
        });
    });
    return `File uploaded and moved!<br><a href="./"><input type="submit" value="home"></a>`;

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
};

exports.UploadForm = (part) => {
    var UploadForm = `
    <form action="${part}" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">
    </form>
    `
    return UploadForm;
};