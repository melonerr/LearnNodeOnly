var MongoClient = require('mongodb').MongoClient;

exports.MongoConnect = (URL) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("customers", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });

    return "Collection created!";
};
exports.MongoInsertOne = (URL, Data) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").insertOne(Data, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    return "1 document inserted";
};
exports.MongoInsertMany = (URL, Data) => {
    var count = data.length;
    MongoClient.connect(URL, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        await dbo.collection("users").insertMany(Data, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
    return "Number of documents inserted: " + count;
};
exports.MongoInsertID = (URL, Data) => {
    var count = data.length;
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").insertMany(Data, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
    return "Number of documents inserted: " + count;
};
exports.MongoFindOne = (URL) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    return "findOne";
};
exports.MongoFindAll = (URL) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    return "findAll";
};
exports.MongoFindSome = (URL) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").find({}, { projection: { _id: 0, name: 1, role: 1 } }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    return "findSome";
};
exports.MongoFilter = (URL, Filter) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").find(Filter).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    return "Filter";
};
exports.MongoFilterAll = (URL, FindAll) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").find(FindAll).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    return "Filter All";
};
exports.MongoSort = (URL, Sort) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").find().sort(Sort).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    return "Filter Sort";
};
exports.MongoDeleteOne = (URL, Del) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").deleteOne(Del, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        });
    });
    return "Delete One";
};
exports.MongoDeleteMany = (URL, Del) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").deleteMany(Del, function(err, obj) {
            if (err) throw err;
            console.log(obj.result.n + " document(s) deleted");
            db.close();
        });
    });
    return "Delete Many";
};
exports.MongoDropCallection = (URL, Callection) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection(Callection).drop(function(err, delOK) {
            if (err) throw err;
            if (delOK) console.log("Collection deleted");
            db.close();
        });
    });
    return "Drop Many";
};
exports.MongoUpdateOne = (URL, New, Old) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").updateOne(Old, New, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
    return "Update One";
};
exports.MongoUpdateMany = (URL, New, Old) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").updateMany(Old, New, function(err, res) {
            if (err) throw err;
            cconsole.log(res.result.nModified + " document(s) updated");
            db.close();
        });
    });
    return "Update Many";
};
exports.MongoLimit = (URL, Limit) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection("users").find().limit(Limit).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

    return "limit";
};
exports.MongoLimit = (URL) => {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mrdb");
        dbo.collection('users').aggregate([{
            $lookup: {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }]).toArray(function(err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            db.close();
        });
    });

    return "Join";
};