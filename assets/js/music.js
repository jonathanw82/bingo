"use strict";

let music = document.getElementById("music");
let delta_time = document.getElementById("audio_time");
let elapsed_time= null;
let track1 = "theme";
const Track1 = "./assets/Music/theme.mp3";
let track2 = "winner-line";
const Track2 = "./assets/Music/winner_line.mp3"
let track3 = "winner-house";
const Track3 = "./assets/Music/winner_house.mp3"
let track4 = "winner-corners";
const Track4 = "./assets/Music/winner_4corner.mp3"

let options_button = document.getElementById("options").addEventListener('click', showoptions);
function showoptions(){
    // show or hide the ausio options menu
    document.getElementById("audio_video_controls").classList.toggle("hide");
    document.getElementById("audio_video_options").classList.toggle("hide");
}

let play_button = document.getElementById("play_button");
play_button.addEventListener('click', play_audio);
function play_audio() {
    // check to see if audio is playing or paused
    if(music.paused){
        music.play();
        play_button.value = "PAUSE";
    }else{
        music.pause();
        play_button.value = "PLAY";
        clearInterval(elapsed_time);
    }
}


let replay = document.getElementById("replay").addEventListener('click', replay_audio);
function replay_audio(){
    // replay current playing audio
    clearInterval(elapsed_time);
    music.currentTime = 0;
    music.play();  
    play_button.value = "PAUSE";
}

let track_selection = document.getElementById("track_selection").addEventListener('click', select_track);
function select_track(){
    // track selction from the radio buttons
   let radio_button = document.getElementsByName("radio");
    for(let i = 0; i < radio_button.length; i++ ) {
        if( radio_button[i].checked ) {
            if(radio_button[i].value == track1){
                music.src = Track1;
            }
            else if(radio_button[i].value == track2){
                music.src = Track2;
            }
            else if(radio_button[i].value == track3){
                music.src = Track3;
            }
            else if(radio_button[i].value == track4){
                music.src = Track4;
            }
        }
    }
}

let talk_over_vol = 0;
let talk_over_level_input = document.getElementById("talk_over_level_input");
talk_over_level_input.addEventListener('click', talk_over_level);
function talk_over_level(){
    // talk over feature for audio incase of mixer failure
    talk_over_vol = talk_over_level_input.value;
}

let talk_over_button = document.getElementById("talk_over");
talk_over_button.addEventListener("click", talk_over_click);
function talk_over_click(){
    // talk over button state
    talk_over_button.value = "active"
    if(music.volume == 1){
        music.volume = talk_over_vol;
        talk_over_button.value = "Talk Active"
        talk_over_button.classList.remove("btn-secondary");
        talk_over_button.classList.add("btn-warning");
    }else{
        music.volume = 1;
        talk_over_button.value = "Talk Over"
        talk_over_button.classList.remove("btn-warning");
        talk_over_button.classList.add("btn-secondary");
    }
}
