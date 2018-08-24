
// When clicking submit button on contact page.

$("#submit").on("click", function(event) {
    event.preventDefault();
});

// Placeholder for prompt? Or something that
// should go off when someone sends an inquiry from site.

console.log(newQ);

// Post request.
// Questions
$.post("api/new", newQ)

    .then(function() {
        var row = $("<div");
        row.addClass("question");

        row.append("<p>" + newQ.author + "</p>");
        row.append("<p>" + newQ.body + "</p>");
        row.append("<p>" + moment(newQ.created_at).format("dd-mm-yyyy") + "</p>");

        $("#QandA").prepend(row);

    });

    // Answers
 $.post("api/new", newA)
     .then(function() {
        var row = $("<div");
        row.addClass("answer");

         row.append("<p>" + newA.body + "</p>");
        row.append("<p>" + moment(newA.created_at).format("dd-mm-yyyy") + "</p>");

        $("#QandA").prepend(row);
    });

    // Grabs all posts.

$.get("/api/all", function(data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("question");

            row.append("<p>" + data[i].author + "</p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>" + moment(newQ.created_at).format("dd-mm-yyyy") + "</p>");

            $("#QandA").prepend(row);
            }
        }
    })