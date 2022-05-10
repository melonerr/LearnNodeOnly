// import 
const http = require('http');
var file = require('./module/uploadfile_module');
var mail = require('./module/mailer_module');
var mysql = require('./module/mysql_module');
var MongoDB = require('./module/MongoDB_module');
const express = require('express');
const app = express();

//
var ContentTypeJson = 'application/json';
var ContentTypeHTML = 'text/html';
var MongoURL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const port = 3000;
// View engine setup
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
});
app.post('/fileupload', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var FileUploadStatus = file.UploadFile(req);
    res.write(FileUploadStatus);
    return res.end();
});
app.get('/formupload', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    res.write(file.UploadForm('fileupload'));
    return res.end();
});
app.get('/insert', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    mysql.MySQLInsert('customers', 'Company Inc', 'Highway 37');
    return res.end();
});
app.get('/select', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    mysql.MySQLSelect('customers');
    return res.end();
});
app.get('/mon', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoConnect(MongoURL);
    res.write(Data);
    return res.end();
});
app.get('/monInsertOne', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var data = { name: "Company Inc", role: "user" };
    var Data = MongoDB.MongoInsertOne(MongoURL, data);
    res.write(Data);
    return res.end();
});
app.get('/monInsertMany', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
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
});
app.get('/monInsertID', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var data = [
        { _id: 10, name: 'ID Company Inc', role: 'user' },
        { _id: 11, name: 'ID Company Inc', role: 'user' },
        { _id: 12, name: 'ID Company Inc', role: 'user' }
    ];
    var Data = MongoDB.MongoInsertID(MongoURL, data);
    res.write(Data);
    return res.end();
});
app.get('/monFindOne', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoFindOne(MongoURL);
    res.write(Data);
    return res.end();
});
app.get('/monFindAll', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoFindAll(MongoURL);
    res.write(Data);
    return res.end();
});
app.get('/monFindSome', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoFindSome(MongoURL);
    res.write(Data);
    return res.end();
});
app.get('/monFindFilter', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoFilter(MongoURL, { role: "admin" });
    res.write(Data);
    return res.end();
});
app.get('/monFindFilterAll', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoFilterAll(MongoURL, { role: /^a/ });
    res.write(Data);
    return res.end();
});
app.get('/monSort', (req, res) => {
    // { name: 1 } or { name: -1 }
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoSort(MongoURL, { name: 1 });
    res.write(Data);
    return res.end();
});
app.get('/monDeleteOne', (req, res) => {
    // { name: 1 } or { name: -1 }
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoDeleteOne(MongoURL, { name: 'Data' });
    res.write(Data);
    return res.end();
});
app.get('/monDeleteMany', (req, res) => {
    // MongoDb: /^a/ 
    //   ==
    // MySQL:  Like %a%
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoDeleteMany(MongoURL, { name: /^a/ });
    res.write(Data);
    return res.end();
});
app.get('/monDropCallection', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoDropCallection(MongoURL, 'test');
    res.write(Data);
    return res.end();
});
app.get('/monUpdateOne', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoUpdateOne(MongoURL, { $set: { name: "", role: "" } }, { name: "" });
    res.write(Data);
    return res.end();
});
app.get('/monUpdateMany', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoUpdateMany(MongoURL, { $set: { name: "", role: "" } }, { name: "" });
    res.write(Data);
    return res.end();
});
app.get('/monLimit', (req, res) => {
    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    var Data = MongoDB.MongoLimit(MongoURL, 5);
    res.write(Data);
    return res.end();
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});