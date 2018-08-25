// ========================= Dependencies ========================= //

require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var QandA_db = require("./models");

// ========================= PORTS ========================= //

var app = express();
var PORT = process.env.PORT || 8080;

// ========================= MiddleWare ========================= //

// Parses urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));

// Parses json.
app.use(bodyParser.json());

// Static directory.
app.use(express.static("public"));

// ========================= Handlebars ========================= //

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// ========================= Routes ========================= //

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

var syncOptions = { force: false };

// If running a  test, set syncOptions.force to true.
// Clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}


// Starts the server to begin listening, syncs models.

QandA_db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;
