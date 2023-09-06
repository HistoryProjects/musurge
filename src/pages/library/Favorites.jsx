import {Link} from "react-router-dom"
import favoriteImg from '../../assets/images/favorites.webp';
import axios from "axios";
import React, {useEffect} from 'react';
import Play from '../../components/controls/Play';
import PlusBtn from "../../components/controls/PlusBtn";

import {FaPlay} from "react-icons/fa";
import {FaPause} from "react-icons/fa";


const Favorites = ({ setTracks, tracks, handlePlay, isPlaying, activeIndex }) => {

    useEffect(() => {
        const getTracks = async () =>{
            let response = await axios.get("http://localhost:5000/favorites")
            setTracks(response.data);
        }
        
        getTracks()
    },[setTracks])
 
    return (
        <div>
            <div className="text-white bg-componentBg p-5 m-4 rounded-xl">
                    <div className="flex gap-8">
                        <img src={favoriteImg} alt="" className="w-275 h-275 rounded-2xl"/>
                        <div>
                        <h4 className="mt-5 font-bold">Плейлист</h4>
                        <h2 className="mt-10 text-5xl font-bold">Любимые треки</h2>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="border-b-2 border-[#B8B9BC] w-full flex items-center justify-between pl-0 pr-8 mb-5">
                                <div className="">#</div>
                                <div className="w-1/3">Title</div>
                                <div className="w-1/4">Album</div>
                                <div className="">Time</div>
                        </div>

                        
                        {
                            tracks.map((item, index) => {
                                const isActive = activeIndex === index;
                                const isTrackPlaying = isActive && isPlaying;
                                console.log("item: " + item.album)

                                return(
                                    <div key={index} className="w-full flex items-center justify-between mb-5">

                                        <div> {index + 1} </div>

                                        <Play
                                            isPlaying={isTrackPlaying}
                                            onClick={()=>handlePlay(index, item.preview_url)}
                                            playIcon={FaPlay}
                                            pauseIcon={FaPause}
                                            size={18} //24px  
                                        />  

                                        <div className="w-1/3 flex items-center gap-5">
                                            <img src={item.album.images[2].url} alt="" />

                                            <div>
                                                <p key={item.id}>{item.name}</p>
                                        
                                                <Link 
                                                    key={item.artists[0].id} 
                                                    to={`/artist/${item.artists[0].id}`} 
                                                    className="artist-link"
                                                >
                                                    {item.artists[0].name}
                                                </Link>
                                            </div>
                                        </div>

                                        <Link 
                                            key={item.album.id} 
                                            to={`/album/${item.album.id}`} 
                                            className="w-1/3 text-center"
                                        >
                                            {item.album.name}
                                        </Link>

                                        <div className="w-1/12 flex items-center justify-around">
                                            <PlusBtn />

                                        
                                        </div>

                                        <p>
                                            {Math.floor(item.duration_ms/60000)}:
                                            {
                                            ((item.duration_ms%60000)/1000)
                                            .toFixed(0)
                                            .padStart(2, '0')
                                            }
                                        </p>
                                        <hr />
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
        
    );
  };
  
  export default Favorites;

 