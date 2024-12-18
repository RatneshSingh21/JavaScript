console.log('hello');
let audioElement=new Audio("songs/1.mp3");
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItemPlay=document.getElementsByClassName('songItemPlay');

var song=[
   {songName:"SUNIYAN SUNIYAN ", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
   {songName:"Baagh Ka Kareja ", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
   {songName:"Hind Ke Sitara", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
   {songName:"Aankhein Khuli Song ", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
   {songName:"Kun Faya Kun ", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
   {songName:"Salam-e-Ishq", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
   {songName:"Salam-e-Ishq", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
   {songName:"Salam-e-Ishq", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
   {songName:"Salam-e-Ishq", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
   {songName:"Salam-e-Ishq", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
   
]
masterPlay.addEventListener('click',()=>{
       if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
            gif.style.opacity='1';
           

        }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity='0';
        
    }
})

audioElement.addEventListener('timeupdate',()=>{

 progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value* audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songlistplay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        const clickedSongIndex = parseInt(e.target.id);

        if (songIndex === clickedSongIndex && !audioElement.paused) {
            // If the clicked song is the same as the current song and it's playing, pause it
            audioElement.pause();
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            gif.style.opacity = '0';
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
        } 
       else{
        makeAllPlays();
        songIndex=clickedSongIndex;
        e.target.classList.add('fa-pause-circle');
        e.target.classList.remove('fa-play-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity='1';
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
       }

     
     })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
        {
            songIndex=0;
        }
    else{
        songIndex-=1;
    }  
    audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity='1';
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')  
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10)
        {
            songIndex=0;
        }
    else{
        songIndex+=1;
    }  
    audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity='1';
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')  
})





