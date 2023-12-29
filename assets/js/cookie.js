"use strict";

const cookieStorage = {
    getItem: (key) =>{
        // get cookies
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key]
    },
    setItem: (key, value) =>{
        //sets cookies
        let d = new Date();
        d.setTime(d.getTime() + (100 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    },
    delItem: (key, value) =>{
        // delets cookies by making them expire
        let expires = "expires= Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    },
};

const consentName = 'darkOstara';
const saveToStorage = (cookieName) => cookieStorage.setItem(cookieName, true);
const delFromStorage = (cookieName) => cookieStorage.delItem(cookieName, true);


function checkCookie(){
    // checks cookie status
    let checkloggedInCookie = cookieStorage.getItem(consentName);

    if(!checkloggedInCookie){
        if(window.localStorage){
            if (!localStorage.getItem('reload')) { 
                localStorage['reload'] = true; 
                window.location.href = "login.html"; 
            }else{
                localStorage.removeItem('reload'); 
            }
        }
    }else{
        if(window.localStorage){
            if (!localStorage.getItem('reload')) { 
                localStorage['reload'] = true; 
                window.location.href = "bingo.html";
            }else{
                localStorage.removeItem('reload'); 
            }
        }
    }
}

let logout = document.getElementById("logout")
if(logout)logout.addEventListener('click', log_out);

function log_out(){
    // removes cookies and data stored locally
    delFromStorage(consentName);
    localStorage.removeItem('userName'); 
}