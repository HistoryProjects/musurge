import TracksFromPlaylist from "./TracksFromPlaylist";


const TrackItem = ({ tracks, handlePlay, isPlaying, activeIndex}) => {
    return (
        <div>
            <div className="top-tracks">
                    <TracksFromPlaylist 
                        tracks={tracks} 
                        handlePlay={handlePlay}
                        isPlaying={isPlaying}
                        activeIndex={activeIndex}
                    />
            </div>
        </div>
    )
}
export default TrackItem;