// member-login.js
document.getElementById('memberLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully logged in
            window.location.href = 'member-dashboard.html';
        })
        .catch((error) => {
            console.error('Error logging in: ', error.message);
        });
});
