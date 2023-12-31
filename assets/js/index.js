"use strict";

window.onload = (event) => {
    checkCookie();
    new_number.innerHTML = 0;
    generate_called_number_table();
    game_status("manual");
    game_speed.value = 6000;
    select_track();
    select_game();
    talk_over_level();
    videoRemaining();
};