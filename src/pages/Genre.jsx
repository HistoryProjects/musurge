import {genres} from "../data";
import PL_CardItem from "../components/content/playlist/PL_CardItem"

import { useParams } from 'react-router-dom';
import axios from "axios";
import {useState, useEffect} from "react";

const Genre = ({token}) => {
    
    const {id} = useParams();
    const [genrePlaylists, setGenrePlaylists] = useState([])
    const [title, setTitle] = useState("");


    useEffect(() => {
        const foundItem = genres.find(item => item.id === id);
        if (foundItem) {
          setTitle(foundItem.title);
        }
      }, [id]);
      


    useEffect(() => {
        const getPlaylistByGenre = async () =>{
            try{
                const response = await axios.get
                (`https://api.spotify.com/v1/browse/categories/${id}/playlists?offset=0&limit=50`,{
                    headers: { Authorization: `Bearer ${token}` }
                })

                console.log(response.data.playlists.items)
                setGenrePlaylists(response.data.playlists.items)
            }catch(error){
                console.error('Ошибка при получении плейлистов', error)
            }
        }

        getPlaylistByGenre();
        
    },[token, id])
    


    return (
      <div className="rounded-xl text-center">
        <div className="bg-componentBg p-5 m-4 rounded-xl">
            <div className="w-full p-5 text-white text-2xl font-medium text-left">
                <h1>{title}</h1>
            </div>

            <PL_CardItem pl_items={genrePlaylists.slice(0, 5)} /> <br/><br/>
            <PL_CardItem pl_items={genrePlaylists.slice(5, 10)} /> <br/><br/>s
        </div>
      </div>
    );
  };
  
  export default Genre;