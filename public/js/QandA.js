$(document).ready(function() {
   
    // Questions array.
    var questions = [];

    // Grabs questions from the database.
    getQuestions();
});

// Updates the Questions array.

function getQuestions() {
    $.get("api/")
}