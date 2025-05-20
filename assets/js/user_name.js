"use strict";

let user_name = '';

// display user name and store it in local storage
let display_user = document.getElementById('display_user');
if(display_user)display_user.innerHTML = localStorage.getItem('userName');