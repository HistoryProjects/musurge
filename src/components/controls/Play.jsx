

const Play = ({isPlaying, onClick, playIcon, pauseIcon, size}) =>{

    const Icon = isPlaying ? pauseIcon : playIcon;
    return (
        <button onClick={onClick} >
          <Icon size={size} />
        </button>
    )

}
export default Play;

