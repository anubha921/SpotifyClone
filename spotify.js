let songIndex = 0;
let audioElement = new Audio('Songs/BaatonKoTeri.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Baaton Ko Teri", filePath: "Songs/BaatonKoTeri.mp3", coverPath: "SongsCoverPage/baaton-ko-teri-song.jpg"},
    {songName: "Bamb Aa Gya", filePath: "Songs/Bamb-Aa-Gaya(PaglaSongs).mp3", coverPath: "SongsCoverPage/bambAaGaya.jpg"},
    {songName: "Maine Tujhe Dekha", filePath: "Songs/Maine-Tujhe-Dekha-Haste-Hue(PaglaSongs).mp3", coverPath: "SongsCoverPage/Maine-Tujhe-Dekha-Haste-Hue.jpg"},
    {songName: "Rashke Qamar", filePath: "Songs/Mere-Rashke-Qamar(PaglaSongs).mp3", coverPath: "SongsCoverPage/RashkeKamar.jpg"},
    {songName: "Pasoori", filePath: "Songs/Pasoori(PaglaSongs).mp3", coverPath: "SongsCoverPage/Pasoori.jpg"},
    {songName: "Teri Meri Gallan", filePath: "Songs/Teri-Meri-Gallan-Hogi-Mashhur(PaglaSongs).mp3", coverPath: "SongsCoverPage/KitheChaliye.jpg"},
    {songName: "Tu Aake Dekhle", filePath: "Songs/Tu-Aake-Dekhle(PaglaSongs).mp3", coverPath: "SongsCoverPage/tuAakeDekhle.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   
    element.addEventListener('click', (e)=>{

        if(audioElement.paused){
            console.log(e.target);
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            console.log(e.target);
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');   
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

