"use strict";

let music = document.getElementById("music");
let delta_time = document.getElementById("audio_time");
let elapsed_time= null;
let track1 = "theme";
const Track1 = "/assets/Music/theme.mp3";
let track2 = "winner";
const Track2 = "/assets/Music/winner.mp3"

function play_audio() {

    if(music.paused){
        music.play();
        play_button.value = "PAUSE";
    }else{
        music.pause();
        play_button.value = "PLAY";
        clearInterval(elapsed_time);
    }
}

let play_button = document.getElementById("play_button");
play_button.addEventListener('click', play_audio);

let replay = document.getElementById("replay").addEventListener('click', replay_audio);
function replay_audio(){
    clearInterval(elapsed_time);
    music.currentTime = 0;
    music.play();  
    play_button.value = "PAUSE";
}

let track_selection = document.getElementById("track_selection").addEventListener('click', select_track);
function select_track(){
   let radio_button = document.getElementsByName("radio");
    for(let i = 0; i < radio_button.length; i++ ) {
        if( radio_button[i].checked ) {
            if(radio_button[i].value == track1){
                music.src = Track1;
            }else if(radio_button[i].value == track2){
                music.src = Track2;
            }
        }
    }
}
