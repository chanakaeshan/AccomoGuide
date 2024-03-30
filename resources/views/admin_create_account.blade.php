<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/admin.css">
    @include('components.navbar')
</head>
<body>
    <header>
        
    </header>
    <h1>Create Account</h1>
    <nav>
        <ul>
            <li><a href="admin_create_account">Create Account</a></li>
            <li><a href="share_article">Share Article</a></li>
        </ul>
    </nav>
    <div class="container">
        <form id="signupForm">
            <label for="user_type">Select User Type:</label>
            <select id="user_type" name="user_type">
                <option value="LANDLORD">Landlord</option>
                <option value="WARDEN">Warden</option>
                <option value="STUDENT">Student</option>
            </select>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="button" id="signupButton">Create Account</button>
        </form>
                        <div id="responseMessage" class="response-message"></div>

    </div>
    <script>
        // Use jQuery.noConflict() to avoid conflicts with other libraries
        jQuery.noConflict();
        // Use jQuery instead of $ after this point
        jQuery(document).ready(function($) {
            // Get the API_URL from the Blade template
            var apiUrl = "{{ env('API_URL') }}/api/public/signup/accounts";
            console.log("apiurl",apiUrl)

            //  var userType = $('#user_type').val();

            $('#signupButton').click(function() {
                var formData = {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    password: $('#password').val(),
                    userType: $('#user_type').val()
                };

                console.log("formData", formData);
                
                $.ajax({
                    url: apiUrl,
                    type: 'POST',
                    data: formData,
                    success: function(response) {
                    
                       if(response.message != "User Registered!"){
                        $('#responseMessage').removeClass('success-message').addClass('error-message').html('<p>Error: ' + response.error + '</p>');

                       }else{
                         $('#responseMessage').removeClass('error-message').addClass('success-message').html('<p>' + response.message + '</p>');
                       }
                        // Clear the form fields
                        $('#username').val('');
                        $('#email').val('');
                        $('#password').val('');
                        $('#userType').val('');
                    }
                });
            });
        });
    </script>
</body>
</html>
