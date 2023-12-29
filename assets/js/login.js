"use strict";

const pass = "Letmein";

let login_info = null;
let password_value = null;

let user = document.getElementById("user_name");
user.addEventListener('click', clearBox);

function clearBox(){
    user.value = "";
}

let user_submit = document.getElementById("user_submit").addEventListener('click', getUserName);
function getUserName(){
    
     let login_name = document.getElementById('login_name');

    if(user.value.length == 0){
        login_name.innerHTML = `Please enter a valid User Name`
    }else{
        user_name = user.value.charAt(0).toUpperCase() + user.value.slice(1); // give the user name and upper case first letter

        if(window.localStorage){
            // store the user in the local storage to be used site wide
            localStorage['userName'] = user_name;
        }
 
        login_name.innerHTML = `Hello ${user_name}! <a href="#" id="not_you">Not You?</a>`;

        const not_you = document.getElementById('not_you').addEventListener('click', () => { location.reload();}); // if button prressed reload the page

        document.getElementById('user_name_box').classList.add('hide');
        
        document.getElementById('password_box').innerHTML = `<input id="password" type="password" placeholder="Password">
                                <button id="submit"><i class="fa fa-solid fa-chevron-right"></i></button>`;

        let submit = document.getElementById("submit");
        submit.addEventListener('click', checkpassword); 

        login_info = document.getElementById("login_info");

        password_value = document.getElementById('password');
        password_value.addEventListener("click", () => { 
            password_value.value = "";
            login_info.innerHTML = "";
        })
    }
}

function checkpassword(){
    let check_pass = password_value.value.length;

    if(check_pass == 0){
        login_info.innerHTML = "Please enter a password";
        console.log("no pass");
    }
    else if(password_value.value != pass){
        login_info.innerHTML = "Password Incorrect ";
    }
    else if(password_value.value == pass){
        login_info.innerHTML = "Password Correct";
        saveToStorage(consentName);
        setTimeout(loggedin, 1000);
    }
}

function loggedin(){
    window.location.href = "entry.html";
}

document.body.onkeyup = function(e){
    // on press of the enter will test if a password is corrent
    if(e.keyCode == 13){   
        e.preventDefault();
        if(!password_value){
            getUserName();
        }else{
            checkpassword(); 
        } 
    }
}
