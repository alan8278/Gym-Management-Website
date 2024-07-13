// view-receipts.js
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const receiptsList = document.getElementById('receiptsList');
        firebase.firestore().collection('receipts').where('memberId', '==', user.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const receipt = doc.data();
                    const listItem = document.createElement('li');
                    listItem.textContent = `Receipt ID: ${doc.id}, Amount: ${receipt.amount}, Date: ${receipt.date.toDate()}`;
                    receiptsList.appendChild(listItem);
                });
            })
            .catch((error) => {
                console.error('Error fetching receipts: ', error.message);
            });
    } else {
        window.location.href = 'member-login.html';
    }
});
