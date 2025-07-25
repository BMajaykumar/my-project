document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');
            
            // Simple validation (replace with real authentication)
            if (username === "" || password === "") {
                errorMsg.textContent = "Please enter both username and password.";
                errorMsg.style.display = "block";
            } else if (username === "admin" && password === "password") {
                errorMsg.style.display = "none";
                alert("Login successful!");
                // Redirect or further logic here
            } else {
                errorMsg.textContent = "Invalid username or password.";
                errorMsg.style.display = "block";
            }
        });