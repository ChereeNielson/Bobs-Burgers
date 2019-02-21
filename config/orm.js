// Import MySQL Connection //
let connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax //
function objToSql(ob) {
    let arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations 
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
};

// Object for all SQL statement functions //
let orm = {
    // Display all Burger in the DB //
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    // Set Burger Devoured Status to True //
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    // Add a Burger to the DB //
    insertOne: function(table, cols, vals, cb) {
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
    // Delete a Burger from the DB //
    deleteOne: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
};

// Export the ORM Object for the Model //
module.exports = orm;