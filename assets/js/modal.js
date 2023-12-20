"use strict";

const modal_open = document.getElementById('modal_open').addEventListener('click', modalOpen);
const modla_close =  document.getElementById("modla_close").addEventListener('click', modalClose);
const modal_content = document.getElementById('model_content');

let dance_counter = 0;
const video_url = ["","assets/video/brew reel.mp4", "assets/video/INSTA_REEl.mp4"]
const video_array = [];

function modalOpen () {
    dance_counter++; 
    /*  Increment a counter and use it to change what happens if the 
        counter is greater that the amount of videos */
    if(dance_counter < 3){
        music.pause();
        game_pause();
        
        modal_content.innerHTML = `<video class="video_size" id="video">
        <source src="${generate_vid_number()}" type="video/mp4"></video>`;
        
        let video = document.getElementById("video");
        video.play();
    }else{
        modal_content.innerHTML = `<div>no more videos</div>`
    }
}

function modalClose () {
    let video = document.getElementById("video");
    if(video)video.pause();
}

function generate_vid_number(){
    // generate a random number as per the ammount of videos to select them at random
    let number = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if(!video_array.includes(number)){
        video_array.push(number);
        console.log(number);
        return video_url[number];
    }else{
        if(video_array.length < 2){
            generate_vid_number();
        }
    }
}