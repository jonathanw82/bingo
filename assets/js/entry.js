"use strict";

window.onload = (event) => {
    startGame();
};

const modal_content = document.getElementById('model_content');
let modal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
function startGame(){
    // Auto show modal and enrty video
    modal.show();
    modal_content.innerHTML = `<video class="video_size" id="video">
                                    <source src="${darkOstara_start}" type="video/mp4"></video>`;
    check_video_for_play();
}

function check_video_for_play(){
    /* Check if video and auto play
     coutesy of stack overflow to prevent The play() request was interrupted by a call to pause() 
     https://stackoverflow.com/questions/6877403/how-to-tell-if-a-video-element-is-currently-playing/6877530#6877530 */
    let video = document.getElementById("video");
    video.addEventListener('ended', auto_close);
    let isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
        && video.readyState > video.HAVE_CURRENT_DATA;
    if (!isPlaying) {
        video.play();
    }
}

const modla_close =  document.getElementById("modla_close").addEventListener('click', modalClose);
function modalClose () {
    // On closing of the video model pause the playing video
    let video = document.getElementById("video");
    video.pause();
    window.location.href = "bingo.html";
}

function auto_close() {
    // After the video go to the bingo.html
    let video = document.getElementById("video");
    video.pause();
    window.location.href = "bingo.html";
}