
// When clicking submit button on contact page.

$("#submit").on("click", function(event) {
    event.preventDefault();

    // Makes Question object.
    var newQ = {
        author: $("#name").val().trim(),
        body: $("#message").val().trim(),
        created_at: moment().format("DD-MM-YYYY")
    };

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

        // Empties inputs.
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    });
        

    $.get("/api/all", function(data) {

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var row = $("<div>");
                row.addClass("question");

                row.append("<p>" + data[i].author + "</p>");
                row.append("<p>" + data[i].body + "</p>");
                row.append("<p>" + moment(newQ.created_at).format("DD-MM-YYYY") + "</p>");

                $("#QandA").prepend(row);
            }
         }
     });