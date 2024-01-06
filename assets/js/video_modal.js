"use strict";

const modal_open = document.getElementById('modal_open');
if(modal_open)modal_open.addEventListener('click', modalOpen);
const modla_close =  document.getElementById("modla_close").addEventListener('click', modalClose);
const modal_content = document.getElementById('model_content');
const restart_vids = document.getElementById('refresh_videos').addEventListener('click', refresh_videos);
const end_game_video = document.getElementById("end_game_video").addEventListener('click', () => end_game_modal("end_credit"));

let dance_counter = 0;
const video_url = ["",video1_url, video2_url, video3_url, video4_url, video5_url];
let video_array = [];
let video_url_location_number = "";

function modalOpen () {
    dance_counter++; 
    /*  Increment a counter and use it to change what happens if the 
        counter is greater that the amount of videos */
        
    if(dance_counter < video_url.length){
        music.pause(); // pause the playing music if any
        game_pause(); // pause the auto game
        generate_vid_number(); // generate a random number to use as the video url

        // generate the content for the video modal
        modal_content.innerHTML = `<video class="video_size" id="video">
            <source src="${video_url_location_number}" type="video/mp4"></video>`;
            check_video_for_play();
    }else{
        modal_content.innerHTML = `<div>no more videos</div>`;
    }
}

function check_video_for_play(){
    /* Check if video and auto play
     coutesy of stack overflow to prevent The play() request was interrupted by a call to pause() 
     https://stackoverflow.com/questions/6877403/how-to-tell-if-a-video-element-is-currently-playing/6877530#6877530 */
    let video = document.getElementById("video");
    let isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
        && video.readyState > video.HAVE_CURRENT_DATA;
    if (!isPlaying) {
        video.play();
    }
}

function generate_vid_number(){
    // generate a random number to select video urls from the video_url array
    let number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    if(!video_array.includes(number)){
        video_array.push(number);
        video_url_location_number = `${video_url[number]}`;
    }else{
        if(video_array.length < 5){
            generate_vid_number();
        }
    }
}

function modalClose () {
    // On closing of the video model pause the playing video
    let video = document.getElementById("video");
    if(video){
        video.pause();
        video.remove();
    }
    videoRemaining();
}

function refresh_videos(){
    // empty the video array so the videos can be played again in a new game
    while (video_array.length > 0){
        video_array.pop();
    }
    dance_counter = 0; // reset the dance counter for next game
    videoRemaining();
    modal_open.classList.remove('hide'); // show the dance button again
    modal_open.classList.add('show_inline');
}

function end_game_modal(action){
    let modal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
    modal.show();
    switch(action){
        case "game_over":
            modal_content.innerHTML = `<img src="assets/media/gameover.gif" class="game_over">`;
            game_pause();
        break;
        case "end_credit":
            modal_content.innerHTML = `<video class="video_size" id="video">
                                            <source src="${endCredit_vid}" type="video/mp4"></video>`;
            check_video_for_play();
            game_pause();
        break;
    }
}

function videoRemaining(){
    // display number of remaining videos
    let total_video = document.getElementById('total_video');
    let video_remaining = document.getElementById('video_remaining');
    let total = (video_url.length -1) - video_array.length;
    total_video.innerHTML = video_url.length -1;
    video_remaining.innerHTML = total;

    if(total == 0){
        modal_open.classList.add('hide'); // remove the dance button if no videos let to play
        modal_open.classList.remove('show_inline');
    }
}