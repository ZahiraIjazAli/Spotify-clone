let songIndex =0;
let audioElement = new Audio("song3.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgress = document.getElementById("progress");
let gif = document.getElementById("gif");
let songItem= Array.from(document.getElementsByClassName("songitem"));

let songs = [
{songName:"Aujla song 1", filepath:"songs/song1.mp3",coverpath:"covers/cover1.jpeg" },
{songName:"Aujla song 2", filepath:"songs/song2.mp3",coverpath:"covers/cover2.jpeg" },
{songName:"Aujla song 3", filepath:"songs/song3.mp3",coverpath:"covers/cover3.jpeg" },
{songName:"Aujla song 4", filepath:"songs/song4.mp3",coverpath:"covers/cover4.jpeg" },
{songName:"Aujla song 5", filepath:"songs/song5.mp3",coverpath:"covers/cover5.jpeg" },
{songName:"Aujla song 6", filepath:"songs/song6.mp3",coverpath:"covers/cover6.jpeg" },
console.log('songs')
]
songItem.forEach((element , i)=> {
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
console.log("element ,i")
});


masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0
    }
})


audioElement.addEventListener("timeupdate",()=>{
progresss= parseInt((audioElement.currentTime/audioElement.duration)*100);

console.log("progresss");
})
progress.addEventListener("change",()=>{
    audioElement.currentTime=progress.value*audioElement.duration/100
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        gif.style.opacity = 1
        songIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        mastersongname.innerText=songs[songIndex].songName
        audioElement.src=`songs/song${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
    
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=5){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/song${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=5
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/song${songIndex+1}.mp3`
    mastersongname.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})





//audioElement.play();
