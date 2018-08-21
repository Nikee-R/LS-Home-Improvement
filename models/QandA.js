// ========================= Questions ========================= //

module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
      author: DataTypes.STRING,
      body: DataTypes.STRING,
      created_at: DataTypes.DATE
    });
    return Question;
  };

  // ========================= Answers ========================= //

  module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
      body: DataTypes.STRING,
    });
    return Answer;
  };

  
  
  