document.addEventListener("DOMContentLoaded",()=>{
 const audio=document.getElementById("audio");
 if(!audio || !Array.isArray(songs))return;
 let index=songs.findIndex(s=>s.id===Number(localStorage.getItem("currentSongId")));
 if(index<0)index=2;
 const art=document.getElementById("player-art"),title=document.getElementById("player-title"),artist=document.getElementById("player-artist");
 const playBtn=document.getElementById("play-pause"),progress=document.getElementById("progress"),current=document.getElementById("current-time"),duration=document.getElementById("duration");
 function fmt(seconds){if(!Number.isFinite(seconds))return "0:00";return Math.floor(seconds/60)+":"+String(Math.floor(seconds%60)).padStart(2,"0")}
 function loadSong(){const s=songs[index];art.src=s.cover;art.alt=s.title+" album artwork";title.textContent=s.title;artist.textContent=s.artist;audio.src=s.audio;progress.value=0;current.textContent="0:00"}
 function toggle(){if(audio.paused){audio.play().then(()=>playBtn.textContent="Ⅱ").catch(()=>{playBtn.textContent="▶"})}else{audio.pause();playBtn.textContent="▶"}}
 playBtn.addEventListener("click",toggle);
 document.getElementById("next").addEventListener("click",()=>{index=(index+1)%songs.length;loadSong();toggle()});
 document.getElementById("previous").addEventListener("click",()=>{index=(index-1+songs.length)%songs.length;loadSong();toggle()});
 audio.addEventListener("loadedmetadata",()=>{progress.max=audio.duration;duration.textContent=fmt(audio.duration)});
 audio.addEventListener("timeupdate",()=>{progress.value=audio.currentTime;current.textContent=fmt(audio.currentTime)});
 progress.addEventListener("input",()=>{audio.currentTime=Number(progress.value)});
 audio.addEventListener("ended",()=>{index=(index+1)%songs.length;loadSong();toggle()});
 document.getElementById("like-track").addEventListener("click",e=>{e.currentTarget.classList.toggle("liked");e.currentTarget.textContent=e.currentTarget.classList.contains("liked")?"♥":"♡"});
 document.getElementById("shuffle").addEventListener("click",e=>e.currentTarget.classList.toggle("liked"));
 document.getElementById("repeat").addEventListener("click",e=>e.currentTarget.classList.toggle("liked"));
 loadSong();
});
