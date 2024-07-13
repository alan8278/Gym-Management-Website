// Assuming you are using Firebase Authentication
const adminLoginForm = document.getElementById('adminLoginForm');

adminLoginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // Redirect to admin dashboard
            window.location.href = 'admin-dashboard.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            // Handle login error (e.g., display error message)
        });
});
