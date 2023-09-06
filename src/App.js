import React, { useEffect, useState, useRef } from 'react';
import Login from './pages/Login';
import Content from "./components/section/Content";
import Navbar from './components/section/Navbar';
import {setClientToken} from "./authParams";
import Player from "./components/section/Player/Player";


function App() {

  //state
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlistId, setPlaylistId] = useState("");
  let [activeIndex, setActiveIndex] = useState(null); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOnSearchPage, setIsOnSearchPage] = useState(false); 
 
  const audioRef = useRef(null);

useEffect(() => {
  if (isPlaying && !isOnSearchPage) {
    // Запуск интервала для отслеживания окончания трека
    const interval = setInterval(() => {
      if (audioRef.current.ended) {
        // Если текущий трек завершился, переходим к следующему
        nextTrack();
      }
    }, 1000); // Проверка каждую секунду

    return () => {
      clearInterval(interval); // Очистка интервала при размонтировании компонента или при изменении трека
    };
  }
}, [isPlaying, activeIndex, isOnSearchPage, audioRef]);



 const handlePlay = (index, trackUrl) => {
  if (activeIndex === index && isPlaying) {
    // Если трек уже воспроизводится, приостановить его
    audioRef.current.pause();
    setIsPlaying(false);
  } else {
    // Если выбран новый трек, приостановить текущий (если воспроизводится),
    // установить новый индекс и запустить воспроизведение нового трека
   if (isPlaying) {
      audioRef.current.pause();
    }
    
    setActiveIndex(index);
    audioRef.current = new Audio(trackUrl);
    setIsPlaying(true);
    audioRef.current.play();

    console.log('play' + index)
  }
};

const nextTrack = () => {  
  if(activeIndex < tracks.length - 1){
    setActiveIndex(activeIndex + 1);
  }else{
    setActiveIndex(0);
  }

  handlePlay(activeIndex+1, tracks[activeIndex+1].preview_url)
};

const prevTrack = () =>{
  if (isPlaying) {
    audioRef.current.pause();
 }
  
  if(activeIndex - 1 < 0){
    setActiveIndex(tracks.length - 1);
  }else{
    setActiveIndex(activeIndex - 1);
  }

  audioRef.current = new Audio(tracks[activeIndex - 1].preview_url);
  audioRef.current.play();
}

useEffect(()=>{
  console.log(isPlaying);
},[isPlaying])


  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = ""
    if(!token && hash){
      const TOKEN = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", TOKEN);
      setToken(TOKEN);
      setClientToken(TOKEN);
    }else {
      setToken(token);
      setClientToken(token);
    }
  },[])


  return (
    <div className="app bg-contentBg">

      {!token ? (
        <Login /> 
      ) : (   
        <div className="">
            <div className="flex w-full gap-2">
                <Navbar  />
                <Content
                  token={token}
                  setTracks={setTracks}
                  tracks={tracks}
                  handlePlay={handlePlay}
                  isPlaying={isPlaying}
                  activeIndex={activeIndex}
                  setPlaylistId={setPlaylistId}
                  audioRef={audioRef}
                  setIsPlaying={setIsPlaying}   
                  isOnSearchPage={isOnSearchPage}
                  setIsOnSearchPage={setIsOnSearchPage}
                />
            </div>

            <Player 
                activeIndex={activeIndex} 
                tracks={tracks}
                isPlaying={isPlaying}
                playlistId={playlistId}
                setIsPlaying={setIsPlaying}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
                audioRef={audioRef}     
            />
        </div>
      )
      }
    </div>
  )
}

export default App;
