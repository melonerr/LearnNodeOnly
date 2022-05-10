# LearnNode

**************************************************************  Node js ***************************************************************

#### Node.js

###### OS

```
const os=require('os');  
console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  
console.log("os.cpus(): \n",os.cpus());  
console.log("os.arch(): \n",os.arch());  
console.log("os.networkInterfaces(): \n",os.networkInterfaces());   
```

###### Timer

**Set timer functions:**

* **setImmediate():** It is used to execute setImmediate.
* **setInterval():** It is used to define a time interval.
* **setTimeout():** It is used to execute a one-time callback after delay milliseconds

**Clear timer functions:**

* **clearImmediate(immediateObject):** It is used to stop an immediateObject, as created by setImmediate
* **clearInterval(intervalObject):** It is used to stop an intervalObject, as created by setInterval
* **clearTimeout(timeoutObject):** It prevents a timeoutObject, as created by setTimeout

  EX Code

```
//loop
setInterval(function() {  
 console.log("setInterval: Hey! 1 millisecond completed!..");   
}, 1000);  

//One time
setTimeout(function() {  
 console.log("setTimeout: completed!");   
}, 1000);  
```

###### try & catch

```
try {  
  const a = 1;  
  const c = a + b;  
} catch (err) {  
  console.log(err);  
}  
```

###### DNS

* dns.getServers()
* dns.setServers(servers)
* dns.lookup(hostname[, options], callback)
* dns.lookupService(address, port, callback)
* dns.resolve(hostname[, rrtype], callback)
* dns.resolve4(hostname, callback)
* dns.resolve6(hostname, callback)
* dns.resolveCname(hostname, callback)
* dns.resolveMx(hostname, callback)
* dns.resolveNs(hostname, callback)
* dns.resolveSoa(hostname, callback)
* dns.resolveSrv(hostname, callback)
* dns.resolvePtr(hostname, callback)
* dns.resolveTxt(hostname, callback)
* dns.reverse(ip, callback)

Ex code

```
const dns = require('dns');  

dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
```

###### Crypto encrypt and decrypt

**
    Hash**

```
const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to JavaTpoint')  
                   .digest('hex');  
console.log(hash);  
```

**
    encrypt**

```
const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'a password');  

var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');  

encrypted += cipher.final('hex');  

console.log(encrypted);  
```

**
    decrypt**

```
const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  

var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';  

var decrypted = decipher.update(encrypted, 'hex', 'utf8');  

decrypted += decipher.final('utf8');
  
console.log(decrypted);  
```

##### Buffers

```
//
var buf = new Buffer([10, 20, 30, 40, 50]);   
var buf = new Buffer("Simply Easy Learning", "utf-8");   

buf = new Buffer(256);  
len = buf.write("Simply Easy Learning");  
console.log("Octets written : "+  len);  
```

##### Path

```
var path = require("path");  
// Normalization  
console.log('normalization : ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));  

// Join  
console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  

// Resolve  
console.log('resolve : ' + path.resolve('path_example.js'));  

// Extension   
console.log('ext name: ' + path.extname('path_example.js'));  
```

##### Query String

**
    parse()**

```
querystring = require('querystring');  
const obj1=querystring.parse('name=sonoo&company=javatpoint');  
console.log(obj1);  
```

**
    stringify()**

```
querystring = require('querystring');  
const qs1=querystring.stringify({name:'sonoo',company:'javatpoint'});  
console.log(qs1);  
```

************************************************************** End Node js ***************************************************************



**************************************************************  Express  ***************************************************************

#### Express.js

##### Request

###### 
    req.param()

```
// ?name=sasha
req.param('name')// => "sasha"

// POST name=sasha
req.param('name')// => "sasha"

// /user/sasha for /user/:name
req.param('name')// => "sasha"
```

###### 
    req.is(type)

```
// With Content-Type: text/html; charset=utf-8
req.is('html');
req.is('text/html');
req.is('text/*');
// => true
```

###### 
    req.get(field)

```
req.get('Content-Type');// => "text/plain"
req.get('content-type');// => "text/plain"
req.get('Something');// => undefined
```

##### Response

###### 
    Render method

1. Install ejs `npm install ejs`
2. Create directory ./view
3. Create file in ./view
   ex  ./view/home.ejs
4. View engine setup `app.set();`

```
app.set('view engine', 'ejs');`

// send the rendered view to the client  
app.get('/home', function(req, res){
    res.render('home')
});

// pass a local variable to the view  
app.get('/home', function(req, res,){
   res.render('home', { name: 'aryan' });  
});

app.render('home', function (err, html) {
    if (err) console.log(err);
    console.log(html);
});
```

###### 
    Cookie method

```
res.cookie('name', 'Aryan', { domain: '.xyz.com', path: '/admin', secure: true });

res.cookie('Section', { Names: [Aryan,Sushil,Priyanka] });

res.cookie('Cart', { items: [1,2,3] }, { maxAge: 900000 });
```

```
// Clear Cookie
res.cookie('name', 'Aryan', { path: '/admin' });

res.clearCookie('name', { path: '/admin' })
```

###### 
    Download method

```
res.download('/report-12345.pdf');
```

###### 
    End method

```
res.end();
res.status(404).end();
```

###### 
    Format method

```
res.format(
    {  
        'text/plain': function(){  
        res.send('hey');  
    },  
    'text/html': function(){  
        res.send('hey');  
    },  
    'application/json': function(){  
        res.send({ message: 'hey' });  
    },  
    'default': function() {  
        res.status(406).send('Not Acceptable');  
    }  
});  

```

###### 
    JSON method

```
res.json(null)  
res.json({ name: 'ajeet' })  
```

###### 
    JSONP method

```
res.jsonp(null)  
res.jsonp({ name: 'ajeet' })  
```

###### 
    Links method

```
res.links({
    next: 'http://api.rnd.com/users?page=5',
    last: 'http://api.rnd.com/users?page=10'
});
```

###### 
    Location method

```
res.location('http://xyz.com');
```

###### 
    Redirect method

```
res.redirect('http://example.com');  
res.redirect(200,'http://example.com');  

```

###### 
    Send method

```
res.send(new Buffer('whoop'));  
res.send({ some: 'json' });
```

###### 
    sendFile method

```
res.sendFile(fileName, options, function (err) {  
  // ...  
});  
```

###### 
    Set method

```
res.set('Content-Type', 'text/plain');  
  
res.set({  
  'Content-Type': 'text/plain',  
  'Content-Length': '123',  
})  
```

###### 
    Status method

```
res.status(403).end();  
res.status(400).send('Bad Request');  
```

###### 
    Type method

```
res.type('.html');              // => 'text/html'  
res.type('html');               // => 'text/html'  
res.type('json');               // => 'application/json'  
res.type('application/json');   // => 'application/json'  
res.type('png');                // => image/png:  
```

##### Get Method

**
    HTML**

```
<form action="login" method="GET">  
    First Name: <input type="text" name="first_name">
    <br>  
    Last Name: <input type="password" name="password">  
    <input type="submit" value="Submit">  
</form>  
```

**
    Node JS**

```
var express = require('express');  
var app = express();  
app.use(express.static('public'));  
 
app.get('/process_get', function (req, res) {  
   response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})   
```

##### Post Method

    **HTML**

```
<form action="login" method="POST">  
    First Name: <input type="text" name="first_name">
    <br>  
    Last Name: <input type="password" name="password">  
    <input type="submit" value="Submit">  
</form>  
```

**
    Node JS**

```
var express = require('express');  
var app = express();  
app.use(express.static('public'));  
 
app.POST('/process_get', function (req, res) {  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})   
```

##### Cookies

```
var express = require('express');  
var cookieParser = require('cookie-parser');  
var app = express();  
app.use(cookieParser());   



app.get('/cookie/set',function(req, res){  
     res.cookie('cookie_name' , 'cookie_value').send('Cookie is set');  
}); 
 
app.get('/cookie/clear',function(req, res){  
     res.clearCookie('cookie_name', { path: '/cookie/set' })  
});  
```

##### FileUpload

    **Form**

```
app.get('/formupload', (req, res) => {

  // HTML form
  var UploadForm = `
    <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">
    </form> `


    res.writeHead(200, { 'Content-Type': ContentTypeHTML });
    res.write(UploadForm);
    return res.end();
});
```

**
    Upload**

```
var formidable = require('formidable');
var mv = require('mv');

app.post('/fileupload', (req, res) => {

    var form = new formidable.IncomingForm();
    var todayDate = new Date().toISOString().slice(0, 10);

    form.parse(req, function(err, fields, files) {
	//File Data
        var oldpath = files.filetoupload.filepath;

	//Get file extension
        var fileType = "." + files.filetoupload.originalFilename.split('.').pop()

	//File location and Rename file
        var newpath = './assets/file/' + "file-" + todayDate + "-" + Name + fileType;

	//Move file
        mv(oldpath, newpath, function(err) {
            if (err) throw consold.log(Error: Can't uploadfile!);
        });
    });

    consold.log(File uploaded and moved!);
    res.end();
});
```

##### Middleware

```
var express = require('express');  
var app = express(); 
 
app.use(function(req, res, next) {  
  console.log('%s %s', req.method, req.url);  
  next();  
});  

app.get('/', function(req, res, next) {  
  res.send('Welcome to JavaTpoint!');  
});  

app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  
```

##### Template Engine

* Pug (formerly known as jade)
* mustache
* dust
* atpl
* eco
* ect
* ejs
* haml
* haml-coffee
* handlebars
* hogan
* jazz
* jqtpl
* JUST
* liquor
* QEJS
* swig
* templayed
* toffee
* underscore
* walrus
* whiskers

**************************************************************  End Express  ***************************************************************


**************************************************************   SQL server  ***************************************************************

#### SQL server

###### 
    Go to SQL command

```
1>sqlcmd -S .\sqlexpress
```

###### 
    Get Version

```
1>select @@version
2>go
```

###### 
    Get date

```
1>select getdate()
2>go
```

###### 
    Create Database

```
1>create database learnnode
2>go
```

###### 
    Select Database

```
1>use learnnode
2>go
3>Changed database context to 'learnnode'.
```

###### 
    Create Table

```
1> create table t1 (id int, name nvarchar(25), role int)
2> go
```

###### 
    Insert Data

```
1> insert into t1 values (1, 'Jira', 1),(2, 'Song', 2)
2> go
```

**************************************************************  End SQL server ***************************************************************
