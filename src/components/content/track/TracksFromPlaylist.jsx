import {Link} from 'react-router-dom';
import Play from '../../controls/Play';
import StarBtn from "../../controls/StarBtn";
import {FaPlay} from "react-icons/fa";
import {FaPause} from "react-icons/fa";


const TracksFromPlaylist = ({
    tracks, handlePlay, isPlaying, activeIndex
}) =>{

    return (
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
               

               return (
                <div key={index} className="w-full flex items-center justify-between mb-5">
                  
                    <div>
                        {index + 1}
                    </div>
                    
                    <Play
                        isPlaying={isTrackPlaying}
                        onClick={()=>handlePlay(index, item.preview_url)}
                        playIcon={FaPlay}
                        pauseIcon={FaPause}
                        size={18} //24px  
                    />
                    
                    <div className="w-1/3 flex items-center gap-5">
                        <img src={item.album.images[2].url} alt="trackImage" />

                        <div>
                            <p>{item.name}</p>
                    
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
                        <StarBtn 
                            trackData={item}
                        />
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
    )
}
export default TracksFromPlaylist;

