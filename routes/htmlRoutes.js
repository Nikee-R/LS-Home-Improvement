var QandA_db = require("../models");
var path = require("path");

module.exports = function(app) {

  // Load contact page.
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // Load index page.
  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"));
  });

  // Load services page.
  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"));
  });

  // Load quotes page.
  app.get("/quote", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/quote.html"));
  });

  // Render 404 page for any unmatched routes.
  app.get("*", function(req, res) {
    res.render("404");
  });

};
