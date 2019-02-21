// Node Dependencies //
let express = require("express");

// Create the router for the app and export the router at the end of the file //
let router = express.Router();

// Import the model to use its DB functions //
let burger = require("../models/burger.js"); 

// Create all routes and setup logic within those routes where required //
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});
// Add New Burger to the DB //
router.post("/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the New Burger //
        res.json({ id: result.insertId });
     });
});
// Set Burger Devoured Status to True //
router.put("/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed then the ID must not exist, throw 404 error //
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// router.post("/burgers/create", function(req, res) {
//     burger.create(req.body.burger_name, function(result) {
//         res.redirect("/burgers");
//     });
// });
// Delete Burger from DB //
router.delete("/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed then the ID must not exist, throw 404 error //
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;