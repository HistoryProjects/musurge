import {useState, useEffect} from 'react';
import axios from 'axios';
import {BiSearch} from "react-icons/bi";
import TracksFromPlaylist from "../components/content/track/TracksFromPlaylist";
import { useLocation } from 'react-router-dom';



const Search = ({ token,
  handlePlay, isPlaying, activeIndex,  audioRef,
  setIsPlaying, isOnSearchPage, setIsOnSearchPage

}) => {

    const location = useLocation();
    const searchPage  = location.pathname === '/search';

    if(searchPage){
        setIsOnSearchPage(true)
    }

   const [searchInput, setSearchInput] = useState("");
   const [searchTracks, setSearchTracks] = useState([]);

   useEffect(() => {
    if (isPlaying && isOnSearchPage) {
      if (audioRef.current.ended) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isPlaying, setIsPlaying, isOnSearchPage]);



   async function handleSearch(){
        let res = await axios.get(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { 
                market: 'KZ',
                limit: 30,
                offset: 5 
            },
        })
        
        setSearchTracks(res.data.tracks.items);
    }

     return (
        <div className="p-3">
            <h1 className="text-white mt-5 mb-5 text-2xl font-bold">Search</h1>

            <div className="flex gap-3">
                <input 
                    type="input" 
                    placeholder='What do you want to listen ?'
                    className="bg-[#404040] text-white p-3 rounded-md w-full placeholder-[#A3A3A3]"
                    value={searchInput}
                    onKeyUp={event =>{
                        if(event.key == 'Enter'){
                            handleSearch();
                        }
                    }}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <button
                    onClick={handleSearch} 
                    className="bg-[#28292D] rounded-md px-3 py-0"
                >
                    <BiSearch className="text-white text-2xl font-bold"/>
                </button>
            </div>

           {searchTracks.length === 0 ? null 
              : 
              (<div className="text-white bg-componentBg p-5 m-4 rounded-xl">
                    <TracksFromPlaylist 
                        tracks={searchTracks}
                        handlePlay={handlePlay} 
                        isPlaying={isPlaying}
                        activeIndex={activeIndex}
                    />
              </div>)

           }
           
           
        </div>
         
     )

}

export default Search

