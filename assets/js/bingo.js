"use strict";

const min_game_numbers = 1;
const max_game_numbers = 90;  

window.onload = (event) => {
    new_number.innerHTML = 0;
    generate_called_number_table();
    game_status("manual");
    game_speed.value = 6000;
    select_track();
};

const count_down = document.getElementById("count_down");
let number_array = [];  // array to store called numbers
const new_number = document.getElementById("new_number"); // new_number disaplats the current number
const game_over = document.getElementById("game_over"); // after 90 numbs have been called display game over
const call_button = document.getElementById("call_button");
call_button.addEventListener("click", () => generate_number("manual"));
call_button.addEventListener("click", () => game_status("manual"));

let isManual = false;
function generate_number(mode){

    if(mode == "manual"){
        isManual = true; // if maual button is clicked dont start the clock else start the clock
        clearInterval(auto_mode);
        counter("clear");
    }
    else counter("start");

    let number = Math.floor(Math.random() * (max_game_numbers - min_game_numbers + 1)) + min_game_numbers; // generate a number betweeen 1 and 90 including 1 and 90

    if(!number_array.includes(number)){
        number_array.push(number);
        new_number.innerHTML = number < 10 ? "&nbsp" + number:number;
        let cell = document.getElementById(number);
        cell.classList.toggle("picked");
    }else{
        if(number_array.length < max_game_numbers){
            if(!isManual)generate_number();
            else generate_number("manual");
        }else{
            game_over.innerHTML = "Game Over";
        }
    }
    isManual = false;
}

const reset_button = document.getElementById("reset_button").addEventListener("click", reset_page);
function reset_page(){
    // reset the page to start a new game
    counter("clear");
    clearInterval(auto_mode);
    new_number.innerHTML = 0;
    // toggle all css on each called number back to its original value
    for(let i = 0; i < number_array.length; i++){
        let cell = document.getElementById(number_array[i]);
        cell.classList.toggle("picked");
    }
    // empty the number array ready fro a new game
    while (number_array.length > 0){
        number_array.pop();
    }
}

const rowZero = document.getElementById("zeros");
const row10 = document.getElementById("10s");
const row20 = document.getElementById("20s");
const row30 = document.getElementById("30s");
const row40 = document.getElementById("40s");
const row50 = document.getElementById("50s");
const row60 = document.getElementById("60s");
const row70 = document.getElementById("70s");
const row80 = document.getElementById("80s");

function generate_called_number_table(action){
    // generates the table of called numbers
    for(let i = 1; i < max_game_numbers + 1; i++){
        let build_row = `<div class="rounded-corners" id="${i}">${i}</div>`;
        if(i < 11)rowZero.innerHTML += `<div class="rounded-corners" id="${i}">${i < 10 ? "&nbsp" + i : i} </div>`;
        if(i > 10 && i < 21)row10.innerHTML += build_row;
        if(i >20 && i < 31)row20.innerHTML += build_row;
        if(i >30 && i < 41)row30.innerHTML += build_row;
        if(i >40 && i < 51)row40.innerHTML += build_row;
        if(i >50 && i < 61)row50.innerHTML += build_row;
        if(i >60 && i < 71)row60.innerHTML += build_row;
        if(i >70 && i < 81)row70.innerHTML += build_row;
        if(i >80)row80.innerHTML += build_row;
    }
}

const auto_call = document.getElementById("auto_button").addEventListener("click", auto_gernerate_number);
const timer_dispalay = document.getElementById("timer_dispalay");
const game_speed = document.getElementById("speed");
let auto_mode = 0;
function auto_gernerate_number(){
    // starts the auto function
    game_status("auto");
    auto_mode = setInterval(generate_number, game_speed.value);
    counter("start");
    console.log(game_speed.value);
}

const auto_stop = document.getElementById("auto_pause_button").addEventListener("click", game_pause);
function game_pause(){
    // Pauses the auto function
    game_status("pause");
    clearInterval(auto_mode);
    counter("clear");
}

const display_status = document.getElementById("status");
function game_status(status){
    // Displays the correct game mode
    switch(status){
        case "auto":
            display_status.innerHTML = "Game Auto";
        break;
        case "pause":
            display_status.innerHTML = "Auto Game Paused";
        break;
        case "manual": 
            display_status.innerHTML = "Mode Manual";
        break;
    }
}
 
let auto_count_down = 0;
let timer = 0;
function counter(action){
    // start or stop the auto number caller count down
    if(action == "start"){
        clearInterval(auto_count_down);
        console.log("start clock");
        timer = game_speed.value / 1000;
        auto_count_down = setInterval(function(){
            timer-=1;
            console.log(timer);
            count_down.innerHTML = timer;
        }, 1000);
    }
    else if(action == "clear"){
        clearInterval(auto_count_down);
        timer = 0
        count_down.innerHTML = "0";
    }
}

let isPaused = false;
document.body.onkeyup = function(e){
    // on press of the spacebar either pause the game or auto start the game
    if(e.keyCode == 32){   
        e.preventDefault();
        if(isPaused == false){
           game_pause(); 
           isPaused = true;
        }else{
            isPaused = false;
            auto_gernerate_number();
        }     
    }
}
