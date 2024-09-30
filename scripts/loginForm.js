const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function handleLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let savePasswordIsChecked = document.getElementById('savePassword').checked;

    let regUsers = localStorage.getItem('regUsers');
    regUsers = JSON.parse(regUsers);

    let personExists = false;

    let loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    let timeNow = new Date();
    let days = 35;
    timeNow.setTime(timeNow.getTime() + (days * 24 * 60 * 60 * 1000)); 
    let expires = "expires=" + timeNow.toUTCString();
    let sessionToken = generateString(36);

    for (let person = 0; person < regUsers.length; person++) {
        if (regUsers[person].username === username && regUsers[person].password === password) {
            if (savePasswordIsChecked === true) {
                document.cookie = `sessionToken=${sessionToken}; ${expires}; path=/`;
            } else {
                sessionStorage.setItem('sessionToken', sessionToken);
            }

            regUsers[person].sessionToken = sessionToken;
            personExists = true;
        }
    }

    if (personExists === false) {
        window.location.href = 'loginFailed.html';
    } else {
        window.location.href = 'loginSuccess.html';
    }

    localStorage.setItem('regUsers', JSON.stringify(regUsers));
} 

