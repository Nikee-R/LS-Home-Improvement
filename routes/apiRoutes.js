// ========================= Dependencies ========================= //

var QandA_db = require("../models");

// ========================= Routes ========================= //

module.exports = function(app) {

    // Get all the questions and answers.
    app.get("/api/QandA", function(req, res) {
        QandA_db.QandA.findAll({}).then(function(dbQandA) {
            res.json(dbQandA);
        });
    });

    // Delete an example by id.
    app.delete("/api/QandA/:id", function(req, res) {
        QandA_db.QandA.destroy({ where: { id: req.params.id } }).then(function(dbQandA) {
            res.json(dbQandA);
        });
    });
};