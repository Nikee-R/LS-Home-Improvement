// ========================= Dependencies ========================= //

var QandA_db = require("../models/QandA");

// ========================= Routes ========================= //

module.exports = function(app) {

    // Get all the questions and answers.
    app.get("/api/:question", function(req, res) {
        QandA_db.QandA.findAll({}).then(function(results) {
            return res.json(results);
        });
    });

    app.get("/api/:answer", function(req, res) {
        QandA_db.QandA.findAll({}).then(function(results) {
            return res.json(results);
        });
    });

    // Adds a new question.
    app.post("api/new", function(req, res) {

        console.log("Question:");
        console.log(req.body);

        QandA.create({
            author: req.body.author,
            body: req.body.body,
            created_at: req.body.created_at
        }).then(function(results) {
            // Reults in a new question.
            res.end();
        });
    });

    // Delete an example by id.
    app.delete("/api/QandA/:id", function(req, res) {
        QandA_db.QandA.destroy({ where: { id: req.params.id } }).then(function(dbQandA) {
            res.json(dbQandA);
        });
    });
};