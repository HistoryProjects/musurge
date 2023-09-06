
const SongDesc = ({activeIndex, tracks}) => {

    return (
        <div>
            <div className="flex gap-5">
                
               <img src={tracks[activeIndex].album.images[2].url} alt="imgSong" />
               <div>
                    <p>{tracks[activeIndex].name}</p>
                    <p>{tracks[activeIndex].artists[0].name}</p>
               </div>
            </div>
        </div>
    )
}
export default SongDesc;



