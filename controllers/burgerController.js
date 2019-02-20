// Node Dependencies //
let express = require("express");

let router = express.Router();

// Import the model to use its DB functions //
let burger = require("../models/burger.js"); 

// Create all routes and setup logic within those routes where required //
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data); 
        res.render("index", {burger_data});
     });
});

router.put("/burgers/update/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.update({
        devoured: true
    }, condition, function() {
        res.redirect("/burgers");
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/burgers");
    });
});

router.delete("/burgers/delete/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        res.redirect("/burgers");
    });
});

module.exports = router;