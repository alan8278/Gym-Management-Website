// add-member.js

document.getElementById('addMemberForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    db.collection('members').add({
        name: name,
        email: email,
        phone: phone
    })
    .then(() => {
        alert('Member added successfully');
        document.getElementById('addMemberForm').reset();
    })
    .catch((error) => {
        console.error('Error adding member: ', error.message);
        alert('Failed to add member: ' + error.message);
    });
});
