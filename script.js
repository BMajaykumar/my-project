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

        // Toggle between login and sign-up forms
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const toggleForm = document.getElementById('toggleForm');
        const formTitle = document.getElementById('formTitle');
        const errorMsg = document.getElementById('errorMsg');

        let isLogin = true;
        toggleForm.addEventListener('click', function(e) {
            e.preventDefault();
            isLogin = !isLogin;
            if (isLogin) {
                loginForm.style.display = '';
                signupForm.style.display = 'none';
                formTitle.textContent = 'Login';
                toggleForm.textContent = "Don't have an account? Sign Up";
                errorMsg.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = '';
                formTitle.textContent = 'Sign Up';
                toggleForm.textContent = 'Already have an account? Login';
                errorMsg.style.display = 'none';
            }
        });

        // Sign-up form submission
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signupUsername').value.trim();
            const password = document.getElementById('signupPassword').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (username === '' || password === '' || confirmPassword === '') {
                errorMsg.textContent = 'Please fill in all fields.';
                errorMsg.style.display = 'block';
            } else if (password !== confirmPassword) {
                errorMsg.textContent = 'Passwords do not match.';
                errorMsg.style.display = 'block';
            } else {
                errorMsg.style.display = 'none';
                alert('Sign up successful!');
                // You can add logic to save user data here
                // Switch back to login form
                isLogin = true;
                loginForm.style.display = '';
                signupForm.style.display = 'none';
                formTitle.textContent = 'Login';
                toggleForm.textContent = "Don't have an account? Sign Up";
            }
        });