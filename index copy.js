// import 
const http = require('http');
var mainData = require('./module/main_module');
var formidable = require('formidable');
var mv = require('mv');

//
var ContentTypeJson = 'application/json';
var ContentTypeHTML = 'text/html';

const port = 3000;
const server = http.createServer((req, res) => {
    mainData.LogServerStart(port);
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    // res.write(JSON.stringify(mainData.MainData(port, req)));
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = './assets/file/' + files.filetoupload.originalFilename;
            mv(oldpath, newpath, function(err) {
                if (err) throw err;
                console.log('File uploaded and moved!');
                res.writeHead(301, {
                    Location: `./`
                }).end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
});
server.listen(port);