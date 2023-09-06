import TrackItem from "./TrackItem";
import React, {useEffect} from 'react';
import axios from 'axios';


const TrackList = ({
    token, tracksId, request, tracks, setTracks,
    handlePlay, isPlaying, activeIndex
}) => {

    useEffect(() => {
        const getTracks = async () =>{
          try{
             let response;
            if(request === "https://api.spotify.com/v1/playlists/"){

                response = await axios.get(`${request}${tracksId}`,{
                    headers: { Authorization: `Bearer ${token}` }
                })

                let data = [];
                
                for(let i = 0; i < response.data.tracks.items.length; i++){
                    data.push(response.data.tracks.items[i].track)
                }

                setTracks(data);
            }
            
          }catch(err){
            console.log('error');
          }
        };

        getTracks();
      
    }, [token, tracksId, request, setTracks]);

    const currentPath = window.location.pathname;

    return (
        <div>
            <TrackItem 
                tracks={tracks} 
                id={tracksId}
                currentPath={currentPath}
                handlePlay={handlePlay}
                isPlaying={isPlaying}
                activeIndex={activeIndex}
            />
        </div>
    )
} 
export default TrackList;