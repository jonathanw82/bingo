"use strict";

window.onload = (event) => {
    checkCookie();
    new_number.innerHTML = 0;
    generate_called_number_table();
    game_status("manual");
    game_speed.value = 6000;
    select_track();
    talk_over_level();
};

let user = document.getElementById("user");

user.innerHTML = "Jon";
