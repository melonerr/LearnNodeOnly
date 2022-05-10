// import 
const http = require('http');
var file = require('./module/uploadfile_module');
var mail = require('./module/mailer_module');
var mysql = require('./module/mysql_module');
var MongoDB = require('./module/MongoDB_module');

//
var ContentTypeJson = 'application/json';
var ContentTypeHTML = 'text/html';
var MongoURL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    if (req.url == '/') {
        res.write('No Part');
        return res.end();

    } else if (req.url == '/fileupload') {
        var FileUploadStatus = file.UploadFile(req);
        res.write(FileUploadStatus);
        return res.end();

    } else if (req.url == '/formupload') {
        res.write(file.UploadForm('fileupload'));
        return res.end();

    } else if (req.url == '/favicon.ico') {
        res.write('favicon.ico');
        return res.end();

    } else if (req.url == '/insert') {

        mysql.MySQLInsert('customers', 'Company Inc', 'Highway 37');
        return res.end();

    } else if (req.url == '/select') {

        mysql.MySQLSelect('customers');
        return res.end();
    } else if (req.url == '/mon') {
        var Data = MongoDB.MongoConnect(MongoURL);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monInsertOne') {
        var data = { name: "Company Inc", role: "user" };
        var Data = MongoDB.MongoInsertOne(MongoURL, data);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monInsertMany') {
        var data = [
            { name: 'A Company Inc', role: 'user' },
            { name: 'B Company Inc', role: 'user' },
            { name: 'C Company Inc', role: 'user' },
            { name: 'D Company Inc', role: 'user' },
            { name: 'E Company Inc', role: 'user' },
            { name: 'F Company Inc', role: 'user' },
            { name: 'G Company Inc', role: 'user' },
            { name: 'H Company Inc', role: 'user' }
        ];
        var Data = MongoDB.MongoInsertMany(MongoURL, data);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monInsertID') {
        var data = [
            { _id: 10, name: 'ID Company Inc', role: 'user' },
            { _id: 11, name: 'ID Company Inc', role: 'user' },
            { _id: 12, name: 'ID Company Inc', role: 'user' }
        ];
        var Data = MongoDB.MongoInsertID(MongoURL, data);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monFindOne') {
        var Data = MongoDB.MongoFindOne(MongoURL);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monFindAll') {
        var Data = MongoDB.MongoFindAll(MongoURL);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monFindSome') {
        var Data = MongoDB.MongoFindSome(MongoURL);
        res.write(Data);
        return res.end();
    } else if (req.url == '/monFindFilter') {
        var Data = MongoDB.MongoFilter(MongoURL, { role: "admin" });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monFindFilterAll') {
        var Data = MongoDB.MongoFilterAll(MongoURL, { role: /^a/ });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monSort') {
        // { name: 1 } or { name: -1 }
        var Data = MongoDB.MongoSort(MongoURL, { name: 1 });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monDeleteOne') {
        // { name: 1 } or { name: -1 }
        var Data = MongoDB.MongoDeleteOne(MongoURL, { name: 'Data' });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monDeleteMany') {
        // MongoDb: /^a/ 
        //   ==
        // MySQL:  Like %a%
        var Data = MongoDB.MongoDeleteMany(MongoURL, { name: /^a/ });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monDropCallection') {
        var Data = MongoDB.MongoDropCallection(MongoURL, 'test');
        res.write(Data);
        return res.end();
    } else if (req.url == '/monUpdateOne') {
        var Data = MongoDB.MongoUpdateOne(MongoURL, { $set: { name: "", role: "" } }, { name: "" });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monUpdateMany') {
        var Data = MongoDB.MongoUpdateMany(MongoURL, { $set: { name: "", role: "" } }, { name: "" });
        res.write(Data);
        return res.end();
    } else if (req.url == '/monLimit') {
        var Data = MongoDB.MongoLimit(MongoURL, 5);
        res.write(Data);
        return res.end();
    }

});
server.listen(port);