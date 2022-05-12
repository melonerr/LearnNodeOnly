var mssql = require('mssql');
var config = {
    server: 'localhost',
    user: 'sa',
    password: '1234',
    database: 'node',
    trustServerCertificate: true,
};

exports.MsSQLConnect = () => {
    mssql.connect(config, function(err) {
        if (err) console.log(err);
        console.log('Connected!');
    });
    return 'Connected!';
};

exports.MsSQLCreateTable = (table, column) => {
    mssql.connect(config, function(err) {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `CREATE TABLE ${table} (${column})`
            // query to the database and get the records
        request.query(script, function(err, recordset) {
            if (err) console.log(err)
        });
    });
    return `Table: ${table}   Created!`;

};

exports.MsSQLDropTable = (table) => {
    mssql.connect(config, function(err) {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `DROP TABLE ${table}`;
        // query to the database and get the records
        request.query(script, function(err, recordset) {
            if (err) console.log(err)
        });
    });
    return `Table: ${table}   Deleted!`;
};

exports.MsSQLInsert = (table, column, values) => {
    mssql.connect(config, function(err) {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `INSERT INTO ${table} (${column}) VALUES (${values})`;
        // query to the database and get the records
        request.query(script, function(err, recordset) {
            if (err) console.log(err)
        });
    });
    return `Insert Data Success!`;
};

exports.MsSQLSelect = (table) => {
    mssql.connect(config, async(err) => {
        if (err) console.log(err);

        var request = new mssql.Request();
        var script = `SELECT * FROM ${table}`;

        await request.query(script, function(err, recordset) {
            if (err) console.log(err)
            console.log(recordset['recordset'])
        });

    });
};

exports.MsSQLWhere = (table, column, operator, data) => {
    mssql.connect(config, async(err) => {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `SELECT * FROM ${table} WHERE ${column} ${operator} '${data}'`;
        await request.query(script, function(err, recordset) {
            if (err) console.log(err)
            console.log(recordset['recordset'])
        });

    });
};

exports.MsSQLWhereLike = (table, column, data) => {
    mssql.connect(config, async(err) => {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `SELECT * FROM ${table} WHERE ${column} LIKE '${data}'`;
        await request.query(script, function(err, recordset) {
            if (err) console.log(err)
            console.log(recordset['recordset'])
        });

    });
};

exports.MsSQLDelete = (table, column, data) => {
    mssql.connect(config, (err) => {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `DELETE FROM ${table} WHERE ${column} = '${data}'`;
        request.query(script, function(err, recordset) {
            if (err) console.log(err)
            console.log('Deleted successful!');
        });

    });
    return 'Deleted successful!';
};

exports.MsSQLUpdate = (table, column, data, id) => {
    mssql.connect(config, (err) => {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `UPDATE ${table} SET  ${column} = '${data}' WHERE id = '${id}'`;
        request.query(script, function(err, recordset) {
            if (err) console.log(err)
            console.log('Update Data successful!');
        });

    });
    return 'Update Data successful!';
};

exports.MsSQLTop = async(table, limit) => {

    await mssql.connect(config, (err) => {
        if (err) console.log(err);
        var request = new mssql.Request();
        var script = `SELECT TOP(${limit}) * FROM ${table}`;
        request.query(script, function(err, recordset) {
            if (err) console.log(err)
            console.log(recordset)
        })
    });

    return data;

};
exports.getCategory = (callback, table, limit) => {
    mssql.connect(config, async(err) => {
        if (err) console.log(err);
        var script = `SELECT TOP(${limit}) * FROM ${table}`;
        var request = new mssql.Request();
        request.query(script, function(error, rows) {
            if (error) {
                console.log('some error occured %s', error);
                return;
            } else {
                callback(rows['recordset']);
            }
        });
    });
}
exports.MsSQLJoin = () => {
    var sql = ``;
};