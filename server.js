// ==============================================================================
// NODE DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

// ================================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ================================================================================
let app = express();

// Serve static content for the app from the "public" directory //
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing //
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE //
app.use(methodOverride("_method"));

// ================================================================================
// HANDLEBARS
// Set Handlebars as the view engine
// This view engine uses defaults that leverage the "Express-way" of structuring the app's views
// ================================================================================
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ================================================================================
// ROUTES
// The below points our server to a series of "route" files
// These routes give our server a "map" of how to respond when users visit or request data from various URLs
// ================================================================================
let routes = require("./controllers/burgerController.js");

app.use("/", routes);

// ================================================================================
// PORT
// Sets an initial port that we'll use in our Listener
// ================================================================================
let PORT = process.env.PORT || 3000;

// ================================================================================
// LISTENER
// The below code effectively "starts" our Server
// ================================================================================
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});
