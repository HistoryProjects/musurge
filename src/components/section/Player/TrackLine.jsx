
const TrackLine = ({
  isPlaying, 
  setIsPlaying, 
  trackProgress, 
  setTrackProgress, 
  startTimer,
  intervalRef, 
  audioRef
}) => {
 
  const { duration } = audioRef.current;

  const currentPercentage = duration
? `${(trackProgress / duration) * 100}%`: "0%";

const trackStyling = `
 -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #28D4D0), color-stop(${currentPercentage}, #777))
`;

const onScrub = (value) => {
  // Clear any timers already running
  clearInterval(intervalRef.current);
  audioRef.current.currentTime = value;
  setTrackProgress(audioRef.current.currentTime);
};

const onScrubEnd = () => {
  // If not already playing, start
  if (!isPlaying) {
    setIsPlaying(true);
  }
  startTimer();
};

  return(
    <div>
        <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="absolute top-[-4px] left-0 w-full block rounded-none bg-[#3b7677]
            h-1 cursor-pointer
            "
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
        />

    </div>
  )
}
export default TrackLine;

