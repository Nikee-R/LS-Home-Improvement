// ========================= Dependencies ========================= //

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// ========================= Questions ========================= //

module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
      author: DataTypes.STRING,
      body: DataTypes.STRING,
      created_at: DataTypes.DATE
    });
    return Question;

    // Syncs with databse.
    Question.sync();

  };

  // ========================= Answers ========================= //

  module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
      body: DataTypes.STRING,
    });
    return Answer;

    // Syncs with databse.
    Answer.sync();
    
  };

