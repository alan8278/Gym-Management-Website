// view-details.js
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const detailsContainer = document.getElementById('details');
        firebase.firestore().collection('users').doc(user.uid).get()
            .then((doc) => {
                if (doc.exists) {
                    const userDetails = doc.data();
                    detailsContainer.textContent = `Name: ${userDetails.name}, Email: ${userDetails.email}, Phone: ${userDetails.phone}`;
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.error('Error fetching user details: ', error.message);
            });
    } else {
        window.location.href = 'user-login.html';
    }
});
