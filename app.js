const music = document.querySelector("audio");
const play = document.querySelector("#play");
const img = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector("#progress");

const songs = [
    
    {
        name : "unstopable",
        title : "unstopable",
        artist : "sia"
    },
    {
        name : "uh na na",
        title : "uh na na",
        artist : "puspalal"

    },
    {
        name : "Love Me Like You Do",
        title : "Love Me Like You Do",
        artist : "Ellie Goulding"
    },
    // {
    //     name : "One Direction",
    //     title : "One Direction",
    //     artist : "Ellie Goulding"
    // }
]

let isPlaying = false;

// Music Playing Function
const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anine");
}

// Music Pause Function
const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anine");
}

play.addEventListener("click", ()=>{
    isPlaying ? pauseMusic() : playMusic();
})

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "media/" + songs.name + ".mp3";
}



let songIdx = 0;

const nextSong = ()=>{
    if(songIdx > songs.length-1){
        return;
    }
    songIdx = songIdx+1;
    loadSong(songs[songIdx]);
    playMusic();
    
}
const prevSong = ()=>{
    if(songIdx < 0){
        return;
    }
    songIdx = songIdx-1;
    loadSong(songs[songIdx]);
    playMusic();
    
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
    
}
console.log(progress.max);


if(music.play()){
    setInterval(()=>{
        progress.value = music.currentTime;
    },500)
    
}
progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    img.classList.add("anine");
    isPlaying = true;
}
loadSong(songs[0]);