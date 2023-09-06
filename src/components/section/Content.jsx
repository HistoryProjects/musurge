//import "../../assets/styles/content.css"
import Header from "./Header";
import Home from '../../pages/menu/Home';
import Login from '../../pages/Login';
import Explore from "../../pages/menu/Explore";
import Favorites from "../../pages/library/Favorites";
import Playlists from "../../pages/library/Playlists";
import Playlist from "../../pages/Playlist";
import Genre from "../../pages/Genre";
import Search from "../../pages/Search";

import {reqPlayList} from "../../data";

import { Route, Routes } from 'react-router-dom';

const Content = ({
    token, setTracks, tracks, 
    handlePlay, isPlaying, activeIndex, 
    setPlaylistId,  audioRef, setIsPlaying,
    setIsOnSearchPage, isOnSearchPage
}) => {
    return (
        <div className="content-wrap w-full mb-[30vh]">
            <Header />
    
            <div className="content rounded-2xl">
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/" element={<Home 
                        token={token} 
                    />} />
                    <Route path="/explore" element={<Explore />} />
                    
                    <Route path="/genre/:id" element={<Genre 
                        token={token}
                    />} />

                    <Route path="/favorites" element={<Favorites
                        setTracks={setTracks} 
                        tracks={tracks}
                        handlePlay={handlePlay} 
                        isPlaying={isPlaying}
                        activeIndex={activeIndex} 
                     />} />
                    <Route path="/playlists" element={<Playlists />} />

                    <Route path="/playlist/:id" element={<Playlist
                        token={token} request={reqPlayList}
                        setTracks={setTracks} tracks={tracks}
                        handlePlay={handlePlay} isPlaying={isPlaying}
                        activeIndex={activeIndex} setPlaylistId={setPlaylistId}
                    />} />

                    <Route path="/search" element={<Search 
                        token={token}
                        handlePlay={handlePlay} 
                        isPlaying={isPlaying}
                        activeIndex={activeIndex}
                        audioRef={audioRef}   
                        setIsPlaying={setIsPlaying}   
                        isOnSearchPage={isOnSearchPage}
                        setIsOnSearchPage={setIsOnSearchPage}
                    />} />

                </Routes>
            </div>
        </div>
    )

}
export default Content;