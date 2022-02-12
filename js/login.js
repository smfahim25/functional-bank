document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user pass
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    if (userEmail == 'sontan@baap.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }

});