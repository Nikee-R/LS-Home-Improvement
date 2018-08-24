var QandA_db = require("../models");

module.exports = function(app) {
  // Load contact page.
  app.get("/contact", function(req, res) {
      QandA_db.QandA.findAll({}).then(function(dbQandA) {
          res.render("contect", {
              msg: "Welcome!",
              QandA: dbQandA
          });
      });
  });

  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
});

  // Render 404 page for any unmatched routes.
  app.get("*", function(req, res) {
    res.render("404");
  });
};
