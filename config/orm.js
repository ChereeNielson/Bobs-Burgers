// Import MySQL Connection //
let connection = require("../config/connection.js");

// Object for all SQL statement functions //
let orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    update: function(tableInput, columnInput, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(columnInput);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, val, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

// Export the ORM object for the model //
module.exports = orm;