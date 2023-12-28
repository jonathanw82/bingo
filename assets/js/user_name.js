"use strict";

let user_name = '';

let display_user = document.getElementById('display_user');
if(display_user)display_user.innerHTML = localStorage.getItem('userName');