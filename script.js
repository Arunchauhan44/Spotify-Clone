console.log(" Hello Brother! ")



//initialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('myprogressbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let previousButton = document.getElementById('previousButton');
let nextButton = document.getElementById('nextButton');

let songs = [
    { songName: "Pahle bhi mai tumse mila hu", filePath: "songs/1.mp3", coverpath: "covers/1.png" },
    { songName: "High Rated Guru randhawa", filePath: "songs/2.mp3", coverpath: "covers/2.png" },
    { songName: " Falak tu garaj tu KGF song ", filePath: "songs/3.mp3", coverpath: "covers/3.png" },
    { songName: "Baby I am a bad boy ", filePath: "songs/4.mp3", coverpath: "covers/4.png" },
    { songName: "siddhu musebala song", filePath: "songs/5.mp3", coverpath: "covers/5.png" },
    { songName: "God allha or Bhagwan", filePath: "songs/6.mp3", coverpath: "covers/6.png" },
    { songName: "Animal movie song", filePath: "songs/7.mp3", coverpath: "covers/7.png" },
    { songName: "Baten adhuri si song", filePath: "songs/8.mp3", coverpath: "covers/8.png" },
    { songName: "Baten adhuri si song", filePath: "songs/9.mp3", coverpath: "covers/9.png" },
    { songName: "Baten adhuri si song", filePath: "songs/10.mp3", coverpath: "covers/10.png" },
]

songItems.forEach((element, i) =>{
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;

   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

  })




 //handle play/pause click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause"); // Update button text to 'Pause'
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play") // Update button text to 'Play'
    }
    
});



//Listen to Events

 audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
    console.log(progress)
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
  
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
     makeAllPlays();
     songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  })
})

document.getElementById("next").addEventListener('click', () => {
    if(songIndex >= 9){
      songIndex = 0;
    }
    else{
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener('click', () => {
  if(songIndex <= 0){
    songIndex = 9;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
})





