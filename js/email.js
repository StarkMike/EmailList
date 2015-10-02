$(document).ready(function() {
	$("#join_list").click(function() {
		var emailAddress1 = $("#email_address1").val();
		var emailAddress2 = $("#email_address2").val();
		var isValid = true;
		
		if(emailAddress1 == "") {
			$("#email_address1_error").text("This field is required");
			isValid = false;
		} else {
			$("#email_address1_error").text("");
		}
		if(emailAddress2 == "") {
			$("#email_address2_error").text("This field is required");
			isValid = false;
		}else {
			$("#email_address2_error").text("");
		}
		
		if (isValid) {
			$("#email_form").submit();
		}
	});
	
	$("#email_address1").focus();
});