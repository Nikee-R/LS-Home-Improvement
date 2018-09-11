$(document).ready(function() {

	$("#client_submit").on("click", function(){
		//prevents the submit button from trying to submit a form when clicked
    	event.preventDefault();
		//a var to hold what user type in
		var client_name = $("#client_name").val().trim();
		var client_email = $("#client_email").val().trim();
		var client_select = $("#client_select").val();
		var client_message = $("#client_message").val().trim();

		var quote = client_name;
		var client_message =	client_message + <br> + 
								client_select + <br> + 
								client_email ;
		 
		var send = require('gmail-send')({
		//var send = require('../index.js')({
		  user: '44lahiererental@gmail.com',
		  // user: credentials.user,                  // Your GMail account used to send emails
		  pass: 'dueoczolrevwxzvs',
		  // pass: credentials.pass,                  // Application-specific password
		  to:   '44lahiererental@gmail.com',

		  subject: quote ,
		  text:    client_message ,         // Plain text
		});
	}

}