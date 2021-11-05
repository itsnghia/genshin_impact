// Audio Control
const audioControl = document.querySelector(".audio-btn");
const vidAudio = new Audio();

const vidAudioSrc = document.createElement("source");
vidAudioSrc.src = "./assets/audio/video-audio.mp3";
vidAudioSrc.type = "audio/mpeg";

vidAudio.appendChild(vidAudioSrc);
vidAudio.autoplay = true;
vidAudio.loop = true;

const bgAudio = new Audio();

const audioSrc = document.createElement("source");
audioSrc.src = "./assets/audio/background-audio.mp3";
audioSrc.type = "audio/mpeg";

bgAudio.appendChild(audioSrc);
bgAudio.autoplay = true;
bgAudio.loop = true;


// Play video on load

const audioToggle = () => {
    if(audioControl.classList.contains("audio-control-on")) {
        audioControl.classList.remove("audio-control-on");
        audioControl.classList.add("audio-control-off");
        audioControl.src = "./assets/images/header/audio-off.png";

        bgAudio.muted = true;

        vidAudio.muted = true;
    } else {
        audioControl.classList.add("audio-control-on");
        audioControl.classList.remove("audio-control-off");
        audioControl.src = "./assets/images/header/audio.png";

        bgAudio.muted = false;
        bgAudio.play();

        vidAudio.muted = false;
        vidAudio.play();
    }
}


audioControl.addEventListener("click", audioToggle);