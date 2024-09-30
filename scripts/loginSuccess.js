let sessionToken = sessionStorage.getItem('sessionToken');
let regUsers = localStorage.getItem('regUsers');
let mainLogin = document.getElementById('mainLogin')
regUsers = JSON.parse(regUsers);


let welcomeMessage = document.getElementById('welcomeMessage');

let loggedInregUsers = {};

let documentCookie = document.cookie;

if (documentCookie.length > 0 && documentCookie.indexOf('sessionToken') > -1) {
    let indexOfEqualSign = documentCookie.indexOf('=');
    sessionToken = documentCookie.slice(indexOfEqualSign + 1);
}

let resultText = document.getElementById("result");

if (sessionToken && sessionToken.length > 0) {
    resultText.innerHTML = "Login Success";
    
    for (let person of regUsers) {
        if (person.sessionToken === sessionToken) {
            loggedInregUsers = person;
        }
    }


    console.log(loggedInregUsers)

    welcomeMessage.textContent = `Welcome ${loggedInregUsers.username}!`;

} else {
    resultText.innerHTML = "You need to be logged in to access this page!"
    mainLogin.style.display = "none"
}