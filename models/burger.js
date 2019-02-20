// Import the ORM to create functions that will interact with the DB //
let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(response);
        });
    },
    update: function(columnInput, vals, id, cb) {
        orm.update("burgers", columnInput, condition, function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;