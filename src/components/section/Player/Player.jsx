import {useLocation } from "react-router-dom";
import {useState } from "react";
import SongDesc from "./SongDesc";
import PlayCircle from "../../controls/PlayCircle";
import Next from "../../controls/Next";
import Prev from "../../controls/Prev";
import Volume from "../../controls/Volume";
import StarBtn from "../../controls/StarBtn";
import {MdPauseCircle} from "react-icons/md";
import {MdPlayCircle} from "react-icons/md";
import {MdSkipNext} from "react-icons/md";
import {MdSkipPrevious} from "react-icons/md";


const Player = ({
    activeIndex, tracks, isPlaying, 
    playlistId, setIsPlaying, 
    nextTrack, prevTrack, audioRef
}) => {

   const [song, setSong] = useState(tracks)
   const [songId, setSongId] = useState(playlistId);
   
   

    if(songId !== playlistId && activeIndex !== null){
        setSongId(playlistId);
        setSong(tracks);
   }
    
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return null; 
    }
  
   return(
    <div className="w-full h-[100px] p-5 player text-white  bg-[#262626] fixed bottom-0 left-0">
       
        {tracks.length === 0 || activeIndex === null ? 
          ( <div className="text-[#28D4D0] h-full uppercase flex items-center justify-center text-3xl font-bold">
                <h1>Select a track to continue</h1>
            </div>
           ) 
          :
          (
            <div>
                 
                
                <div className="flex justify-between items-center"> 
                    <SongDesc activeIndex={activeIndex} tracks={song} />
                

                    <div>
                        <Prev 
                            icon={MdSkipPrevious}
                            size={35}
                            onClick={prevTrack}
                        />

                        <PlayCircle 
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            playIcon={MdPlayCircle}
                            pauseIcon={MdPauseCircle}
                            size={40} //24px 
                            audioRef={audioRef}
                        />

                        <Next 
                            icon={MdSkipNext}
                            size={35}
                            onClick={nextTrack}
                        />
                    </div>

                    <div className="w-1/6 flex items-center justify-end gap-7">
                        <StarBtn />
                        <Volume audioRef={audioRef} />
                    </div>
                </div>
            </div>
              
          )

        }
    </div>
   )
}

export default Player;

