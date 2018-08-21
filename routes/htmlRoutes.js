var QandA_db = require("../models");

module.exports = function(app) {
  // Load index page.
  app.get("/", function(req, res) {
      QandA_db.QandA.findAll({}).then(function(dbQandA) {
          res.render("index", {
              msg: "Welcome!",
              QandA: dbQandA
          });
      });
  });

// ============= Placeholder for other pages! ============= //
  // Load example page and pass in an example by id
  //app.get("/example/:id", function(req, res) {
    //db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      //res.render("example", {
        //example: dbExample
      //});
    //});
  //});
// ============= Placeholder for other pages! ============= //

  // Render 404 page for any unmatched routes.
  app.get("*", function(req, res) {
    res.render("404");
  });
};
