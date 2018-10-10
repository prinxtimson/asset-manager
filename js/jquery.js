$(document).ready(function () {

    $("#loginemail_error_message").hide();
    $("#loginpassword_error_message").hide();
    $("#registername_error_message").hide();
    $("#registeremail_error_message").hide();
    $("#Registerpassword_error_message").hide();
    $("#confirmregisterpassword_error_message").hide();
    
    var error_loginemail = false;
    var error_loginpassword = false;
    var error_registername = false;
    var error_registeremail = false;
    var error_registerpassword = false;
    var error_confirmregisterpassword = false;
    
    $("#loginemail").focusout(function () {
    
        check_loginemail();
    
    });
    
    $("#loginpassword").focusout(function () {
    
        check_loginpassword();
    
    });
    
    $("#registername").focusout(function () {
    
        check_registername();
    
    });
    
    $("#registeremail").focusout(function () {
    
        check_registeremail();
    
    });
    
    $("#registerpassword").focusout(function () {
    
        check_registerpassword();
    
    });
    
    $("#rconfirmregisterpassword").focusout(function () {
    
        check_confirmregisterpassword();
    
    });
    
    
    
    function check_loginemail() {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($("#loginemail").val())) {
            $("#loginemail_error_message").hide();
        } else {
            $("#loginemail_error_message").html("Invalid email address");
            $("#loginemail_error_message").show();
            error_loginemail = true;
        }
    
    }
    
    function check_loginpassword() {
    
        var password_length = $("#loginpassword").val().length;
        if (password_length < 8) {
            $("#loginpassword_error_message").html("At least 8 characters");
            $("#loginpassword_error_message").show();
            error_loginpassword = true;
        } else {
            $("#loginpassword_error_message").hide();
        }
    }
    
    
    function check_registername() {
        var pattern = /^[a-zA-Z]*$/;
        var user_name = $("#registername").val();
        var username_length = $("#registername").val().length;
        if (pattern.test(user_name) && user_name != "") {
            $("#registername_error_message").hide();
    
        } else {
            $("#registername_error_message").html(" only characters allowed ");
            $("#registername_error_message").show();
            error_registername = true;
        }
    }
    
    
    function check_registeremail() {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($("#registeremail").val())) {
            $("#registeremail_error_message").hide();
        } else {
            $("#registeremail_error_message").html("Invalid email address");
            $("#registeremail_error_message").show();
            error_registeremail = true;
        }
    }
    
    function check_registerpassword() {
    
    
        var password_length = $("#Registerpassword").val().length;
    
        if (password_length < 8) {
            $("#Registerpassword_error_message").html("At least 8 characters");
            $("#Registerpassword_error_message").show();
            error_registerpassword = true;
        } else {
            $("#Registerpassword_error_message").hide();
        }
    
    }
    
    
    
    function check_confirmregisterpassword() {
        var password = $("#registerpassword").val();
        var confirm_password = $("#confirmregisterpassword").val();
        if (password != confirm_password) {
            $("#confirmregisterpassword_error_message").html("Passwords don't match");
            $("#confirmregisterpassword_error_message").show();
            confirmregisterpassword_error_message = true;
        } else {
            $("#confirmregisterpassword_error_message").hide();
        }
    }
    
    $("#login").submit(function () {
    
        var error_loginemail = false;
        var error_loginpassword = false;
    
        check_loginemail();
        check_loginpassword();
    
    
        if (error_loginemail == false && error_loginpassword == false) {
            alert("congratulation. you are now logged in...!!!!!!");
            return true;
        } else {
            return false;
        }
    
    });
    
    
    
    $("#register").submit(function () {
    
        error_registername = false;
        error_registeremail = false;
        error_registerpassword = false;
        error_confirmregisterpassword = false;
    
        check_registername();
        check_registeremail();
        check_registerpassword();
        check_confirmregisterpassword();
    
        if (error_registername == false && error_registeremail == false && error_registerpassword == false && error_confirmregisterpassword == false) {
            alert("You have successfully Sign Up, Now you can login...!!!!!!");
            $("#register")[0].reset();
            $("#second").fadeOut("slow", function () {
                $("#first").fadeIn("slow");
            });
    
        } else {
            alert('fill form correctly')
            return false;
        }
    
    });
    
    
    
    
    
    
    
    // on click signin, It Hide Registration Form and Display Login Form 
    $("#signup").on('click', function () {
        $("#first").fadeOut("slow", function () {
            $("#second").fadeIn("3000");
        });
    });
    
    // on click signin, It Hide Registration Form and Display Login Form
    $("#signin").on('click', function () {
        $("#second").fadeOut("slow", function () {
            $("#first").fadeIn("3000");
        });
    });
    
    
    });