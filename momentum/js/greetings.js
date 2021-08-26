const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function helloMessage(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML=`Hello! ${username}`;
}

function onLoginSubmit(event){

    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    helloMessage(username);
}


if(localStorage.getItem("username") === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    const savedUsername = localStorage.getItem("username");
    helloMessage(savedUsername);
}