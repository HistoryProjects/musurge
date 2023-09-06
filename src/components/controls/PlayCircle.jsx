import React,{useEffect} from 'react';

const PlayCircle = ({isPlaying, setIsPlaying, playIcon, pauseIcon, size, audioRef}) =>{

    const Icon = isPlaying ? pauseIcon : playIcon;

    useEffect(() =>{
        if(isPlaying){
           audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
      }, [isPlaying, audioRef])

    const play = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false)
         }else{
            audioRef.current.play();
            setIsPlaying(true)
         }
    }


    return (
        <button onClick={play} >
          <Icon size={size} />
        </button>
    )

}
export default PlayCircle;