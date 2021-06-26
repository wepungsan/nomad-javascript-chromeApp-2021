const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);  
    showGreeting(username);
}

function showGreeting(username) {
    if(username) {
        greeting.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `안녕하세요 ${username}`;
    } else {
        greeting.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `안녕하세요 ${savedUsername}`;
    }
}

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    showGreeting();
}