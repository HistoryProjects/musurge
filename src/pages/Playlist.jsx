import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TrackList from "../components/content/track/TrackList";

const Playlist = ({
  token, request, setTracks, tracks, 
  handlePlay, isPlaying, activeIndex, setPlaylistId
}) => {
    const {id} = useParams();
    setPlaylistId(id)

    //Playlist 
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');


  //console.log(reqString)
    useEffect(() => {
        const getPlaylist = async () =>{
          try{
            const response = await axios.get(`${request}${id}`,{
              headers: { Authorization: `Bearer ${token}` }
            })
        
            setImage(response.data.images[0].url);
            setName(response.data.name);
            setType(response.data.type);
        
    
          }catch(err){
            console.log(err.message);
          }
        };
    
        getPlaylist();
      
    }, [token, id, request]);

     return (
         <div className="text-white bg-componentBg p-5 m-4 rounded-xl">
            <div className="flex gap-8">
                <img src={image} alt={name} width={300} height={300}/>
                <div>
                  <h4 className="mt-5 font-bold">{type}</h4>
                  <h2 className="mt-10 text-5xl font-bold">{name}</h2>
                </div>
            </div>
           
            <TrackList 
                token={token} 
                tracksId={id} 
                request={request}
                tracks={tracks}
                setTracks={setTracks}
                handlePlay={handlePlay}
                isPlaying={isPlaying}
                activeIndex={activeIndex} 
            />
         </div>
     )

}

export default Playlist