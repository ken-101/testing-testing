document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Hardcoded credentials
    const validUsername = "admin";
    const validPassword = "password123";

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the entered username and password are correct
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        alert('Login successful!');
        // Redirect to another page or do something on successful login
        window.location.href = "welcome.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
