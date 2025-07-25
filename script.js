document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const formTitle = document.getElementById('form-title');
            const formSubtitle = document.getElementById('form-subtitle');
            const switchText = document.getElementById('switch-text');
            const switchLink = document.getElementById('switch-link');
            const nameGroup = document.getElementById('name-group');
            const confirmGroup = document.getElementById('confirm-group');
            const submitBtn = document.getElementById('submit-btn');
            const authForm = document.getElementById('auth-form');
            
            // Toggle password visibility
            const togglePassword = document.getElementById('toggle-password');
            const passwordInput = document.getElementById('password');
            
            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
            });
            
            // Toggle confirm password visibility
            const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            
            toggleConfirmPassword.addEventListener('click', function() {
                const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                confirmPasswordInput.setAttribute('type', type);
                this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
            });
            
            // Form switching
            let isLogin = true;
            
            function toggleForm() {
                isLogin = !isLogin;
                
                if (isLogin) {
                    // Switch to login
                    formTitle.textContent = 'Login to Account';
                    formSubtitle.textContent = 'Enter your details to continue';
                    submitBtn.textContent = 'Login';
                    switchText.innerHTML = "Don't have an account? <a id='switch-link'>Sign Up</a>";
                    nameGroup.style.display = 'none';
                    confirmGroup.style.display = 'none';
                } else {
                    // Switch to signup
                    formTitle.textContent = 'Create Account';
                    formSubtitle.textContent = 'Join us today for exclusive benefits';
                    submitBtn.textContent = 'Sign Up';
                    switchText.innerHTML = "Already have an account? <a id='switch-link'>Login</a>";
                    nameGroup.style.display = 'block';
                    confirmGroup.style.display = 'block';
                }
                
                // Reattach event listener to new link
                document.getElementById('switch-link').addEventListener('click', toggleForm);
            }
            
            switchLink.addEventListener('click', toggleForm);
            
            // Form validation
            authForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Reset errors
                document.querySelectorAll('.error-message').forEach(el => {
                    el.style.display = 'none';
                });
                
                // Validate name for signup
                if (!isLogin) {
                    const name = document.getElementById('name').value.trim();
                    if (name.length < 2) {
                        document.getElementById('name-error').style.display = 'block';
                        isValid = false;
                    }
                }
                
                // Validate email
                const email = document.getElementById('email').value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    document.getElementById('email-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate password
                const password = document.getElementById('password').value;
                if (password.length < 6) {
                    document.getElementById('password-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate confirm password for signup
                if (!isLogin) {
                    const confirmPassword = document.getElementById('confirm-password').value;
                    if (password !== confirmPassword) {
                        document.getElementById('confirm-error').style.display = 'block';
                        isValid = false;
                    }
                }
                
                // If valid, show success message
                if (isValid) {
                    const action = isLogin ? 'Login' : 'Sign Up';
                    alert(`${action} successful! Welcome to our platform.`);
                    authForm.reset();
                }
            });
            
            // Social login buttons
            document.querySelectorAll('.social-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const platform = this.querySelector('i').className.split(' ')[1].split('-')[1];
                    alert(`Logging in with ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`);
                });
            });
        });