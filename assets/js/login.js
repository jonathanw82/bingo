"use strict";
const pass = "Letmein";
let submit = document.getElementById("submit").addEventListener('click', checkpassword);
let incorrect = document.getElementById("incorrect");
let password_value = document.getElementById('password');

password_value.addEventListener("click", () => { 
    password_value.value = "";
    incorrect.innerHTML = "";
})

function checkpassword(){
    let no_pass = password_value.value.length;

    if(no_pass == 0){
        incorrect.innerHTML = "Please enter a password";
    }
    else if(password_value.value != pass){
        incorrect.innerHTML = "Password Incorrect ";
    }
    else if(password_value.value == pass){
        incorrect.innerHTML = "Password Correct";
        saveToStorage(consentName);
        setTimeout(loggedin, 1000);
    }
}

function loggedin(){
    window.location.href = "bingo.html";
}

document.body.onkeyup = function(e){
    // on press of the enter will test if a password is corrent
    if(e.keyCode == 13){   
        e.preventDefault();
        checkpassword();
    }
}
