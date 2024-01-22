"use strict";

const min_game_numbers = 1;
const max_game_numbers = 90;  

let auto_mode;
let auto_count_down;
const count_down = document.getElementById("count_down");
let number_array = [];  // array to store called numbers
const new_number = document.getElementById("new_number"); // new_number disaplats the current number
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
    else if (mode == "re_gen"){}
    else counter("start");

    let number = Math.floor(Math.random() * (max_game_numbers - min_game_numbers + 1)) + min_game_numbers; // generate a number betweeen 1 and 90 including 1 and 90

    if(!number_array.includes(number)){
        console.log('generated number = ' + number);
        number_array.push(number);
        new_number.innerHTML = number < 10 ? "&nbsp" + number:number;
        let cell = document.getElementById(number);
        cell.classList.toggle("picked");
        last_called_numbers(number);
    }else{
        if(number_array.length < max_game_numbers){
            console.log('regerate number');
            generate_number("re_gen");
        }else{
            end_game_modal("game_over");
            counter("clear");
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
    last_called_numbers('','reset');
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
let already_running = false;
function auto_gernerate_number(){
    // starts the auto function
    if(!already_running){
        console.log('Auto generate');
        game_status("auto");
        auto_mode = setInterval(generate_number, game_speed.value);
        counter("start");
        console.log(game_speed.value);
        already_running = true;
    }else{
        console.log("Already running!");
    }
}

const auto_stop = document.getElementById("auto_pause_button").addEventListener("click", game_pause);
function game_pause(){
    // Pauses the auto function
    game_status("pause");
    counter("clear");
    console.info('--------------------');
    console.log('Game Paused');
    console.log('timer = ' + timer);
    console.log('Auto mode = ' + auto_mode);
    console.log('--------------------');
}

let timer = 0;
function counter(action){
    // start or stop the auto number caller count down
    console.log('counter has been called = ' + action );
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
        clearInterval(auto_mode);
        auto_mode = false; // to catch overrun state
        clearInterval(auto_count_down);
        timer = 0;
        count_down.innerHTML = "0";
        already_running = false;
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

let game_selection = document.getElementById("game_selection").addEventListener('click', select_game);
let game_in_play = document.getElementById("game_in_play");
function select_game(){
    // Display current game
   let game_button = document.getElementsByName("game_radio");
   let display_card = document.getElementById('display_card');
    for(let i = 0; i < game_button.length; i++ ) {
        if( game_button[i].checked ) {
            if(game_button[i].value == "line"){
                game_in_play.innerHTML = `<strong>Line Game</strong>`;
                display_card.innerHTML = `<img class="game_card" src="assets/media/linecard.png" alt="line card">`;
            }
            else if(game_button[i].value == "house"){
                game_in_play.innerHTML = `<strong>House Game</strong>`;
                display_card.innerHTML = `<img class="game_card" src="assets/media/housecard.png" alt="house card">`;
            }
            else if(game_button[i].value == "corners"){
                game_in_play.innerHTML = `<strong>4 Corners</strong>`;
                display_card.innerHTML = `<img class="game_card top_image" src="assets/media/4corners.png" alt="corners card">
                <img class="game_card bottom_image" src="assets/media/4cornersalt.png" alt="corners card alt">`;
            }
        }
    }
}

let last_called_array = [];
let last_5 = document.getElementById('last_5');
function last_called_numbers(action, reset){
    // last 5 called numbers
    last_called_array.push(action);

    if(last_called_array.length > 5){
        last_called_array.shift();
    }

    let show_last_number = last_called_array.slice(0, -1);
    last_5.innerHTML = show_last_number.join(' ');

    if(reset == 'reset'){
        while (last_called_array.length > 0){
            last_called_array.pop();
        }
        last_5.innerHTML = '';
    }
}