
const secret = require("../secret.js");

// Setup MySQL Connection //
let mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    require("dotenv").config();
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: secret.pass.word,
        database: "burgers_db"
    });
};

// Make Connection //
connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;