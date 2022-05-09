var mysql = require('../node_modules/mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});


exports.MySQLConnect = () => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
};
exports.MySQLCreateDatabase = () => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE learnnode", function(err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    });

};
exports.MySQLCreateTable = (Table) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `CREATE TABLE ${Table} (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY (id))`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Table created");
        });
    });
};
exports.MySQLDropTable = (Table) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `DROP TABLE ${Table}`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Delete Table!");
        });
    });
};
exports.MySQLInsert = (Table, Name, Address) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO ${Table} (name, address) VALUES ('${Name}', '${Address}')`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
};
exports.MySQLSelect = (Table) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT * FROM ${Table}`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};
exports.MySQLWhere = (Table, Column, Data) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT * FROM ${Table} WHERE ${Column} = '${Data}'`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};
exports.MySQLWhereLike = (Table, Column, Data) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT * FROM ${Table} WHERE ${Column} = '%${Data}%'`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};
exports.MySQLDelete = (Table, Column, Data) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `DELETE FROM ${Table} WHERE ${Column} = '${Data}'`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};
exports.MySQLUpdate = (Table, Column, Data, id) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `UPDATE ${Table} SET  ${Column} = '${Data}' WHERE id = '${id}'`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};
exports.MySQLLimit = (Table, Limit) => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT * FROM ${Table} LIMIT ${Limit}`;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};
exports.MySQLJoin = () => {
    const conDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "learnnode"
    });
    conDB.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = ``;
        conDB.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
};