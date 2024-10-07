document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Hardcoded credentials
    const validUsername = "admin";
    const hashedPassword = "ef92b778ba2e8f44f52a47e09db27de4dbad13fbdd7a085144393b9eaeef84fe";

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const enteredPasswordHash = await hashPassword(enteredPassword);

    if (enteredUsername === validUsername && enteredPasswordHash === hashedPassword) {
        alert('Login successful!');
        window.location.href = "welcome.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
