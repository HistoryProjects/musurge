import React, {useState, useEffect} from "react";
import {ImVolumeHigh} from "react-icons/im"; 
import {ImVolumeLow} from "react-icons/im";
import {ImVolumeMute2} from "react-icons/im"; 

const Volume = ({audioRef}) => {
    const [volumeLevel, setVolumeLevel] = useState(50);
    const [volumeChangeShow, setVolumeChangeShow] = useState(false);
    const [activeVolume, setActiveVolume] = useState(false);
   
    const handleVolume = () =>  setActiveVolume(activeVolume => !activeVolume);

    let toggleVolume = activeVolume ? 'activeVolume' : '';
    
    const volumeToggle = () => {
        setVolumeChangeShow(!volumeChangeShow);
        handleVolume();
    }

    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volumeLevel / 100;
        }
    }, [volumeLevel, audioRef]);

    const volumeCheck = (value, size) => {
        switch(true) {
            case value === 0:
              return <ImVolumeMute2 size={size} />;
            case value > 0 && value <= 50:
              return <ImVolumeLow size={size} />;
            case value > 50 && value <= 100:
              return <ImVolumeHigh size={size} />;
            default:
              return <ImVolumeMute2 size={size} />;
        }
    }


    return (
        <div className="volume">
            {volumeChangeShow &&
                <input
                    type="range"
                    value={volumeLevel}
                    min={0}
                    max={100}
                    onChange={(e) => setVolumeLevel(e.target.value)}
                />
            }

            <button 
                className={`${toggleVolume}`}
                onClick={volumeToggle}
            >
                {volumeCheck(volumeLevel, 24)}
            </button>
        </div>
    )
}
export default Volume;