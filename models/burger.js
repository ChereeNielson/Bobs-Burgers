// Import the ORM to create functions that will interact with the DB //
let orm = require("../config/orm.js");

let burger = {
    // Display All Burgers in the DB //
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(response);
        });
    },
    // Change the Devoured State to True //
    update: function(columnInput, vals, id, cb) {
        orm.update("burgers", columnInput, condition, function(res) {
            cb(res);
        });
    },
    // Add a New Burger to the DB //
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Delete a Burger from the DB //
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;