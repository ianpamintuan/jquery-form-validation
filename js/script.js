function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$("#btnSubmit").click(function(e) {
    
    var errorMessage = "";
    
    if($("#lastName").val() == "") {
        errorMessage += "<p>Please enter your last name.</p>";
    }
    
    if($("#firstName").val() == "") {
        errorMessage += "<p>Please enter your first name.</p>";
    }
    
    if($.isNumeric($("#phone").val()) == false && $("#phone").val() != "") {
        errorMessage += "<p>Phone must be numeric.</p>";
    }
    
    if(isEmail($("#email").val()) == false) {
        errorMessage += "<p>Invalid email.</p>";
    }
    
    if($("#terms").is(':checked') == false) {
        errorMessage += "<p>You must agree to the terms before proceeding.</p>";
    }
    
    $("#errorMessage").html(errorMessage);
    
    if(errorMessage == "") {
        alert("Successful!");
        $("#errorMessage").css("background-color", "#3498db");
        $('#btnSubmit').submit();
    } else {
        alert("There are error(s) on your form!");
        $("#errorMessage").css("background-color", "#e74c3c");
        $("#errorMessage").focus();
        e.preventDefault();
    }
});