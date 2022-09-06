import './UB.css'
    ; import albumArt from "../images/album-art.png";
import React, { useContext, useState, useEffect, useRef } from "react";
import NoteContext from "../Context/Notes/NoteContext";



const UiBlock = () => {
    const songData = useContext(NoteContext);
    const audioE1 = useRef(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(1);
    const [previousSong, setPreviousSong] = useState(songData.length - 1)

    function getRanSongIndex() {
        setCurrentSongIndex(Math.floor(Math.random() * songData.length))
    }

    function muteUnmute() {
        audioE1.current.muted = !audioE1.current.muted
    }
    const [currentTrackLength, setCurrentTrackLength] = useState(0)
    const [currentDuration, setCurrentDuration] = useState(0)
    const timeFormating = (timeInSeconds) => { return (new Date(timeInSeconds * 1000).toISOString().substring((timeInSeconds > 3600) ? 11 : (timeInSeconds > 60) ? 14 : 15, 19)) }

    setInterval(() => {

        try {
            let duration = Math.ceil(audioE1.current.currentTime)
            setCurrentDuration(timeFormating(duration))
            // console.log(duration)
        }
        catch (err) {
            console.log('no music playing')
        }
    }, 1000);



    useEffect(() => {
        audioE1.current.play()
        
        setNextSongIndex(() => {
            return ((currentSongIndex + 1) > (songData.length - 1) ? 0 : (currentSongIndex + 1));
        }
        )
        setPreviousSong(() => {
            return (currentSongIndex === 0) ? (songData.length - 1) : (currentSongIndex - 1)
        })

        setTimeout(() => {
            let trackLength = Math.floor(audioE1.current.duration)
            setCurrentTrackLength(timeFormating(trackLength))
            
        }, 200);

    }, [currentSongIndex, songData.length])


    useEffect(() => {
        isPlaying ? audioE1.current.play() : audioE1.current.pause()

    }, [isPlaying])




    return (
        <>
            <section >
                <article className='UI-block-container'>
                    <div className='UI-block'>
                        <div className="item">
                            <img src={albumArt} alt='album art'></img>
                        </div>
                        <div className="item">
                            <ul>
                                <li>current song title: {songData[currentSongIndex].title}</li>
                                <li>by: {songData[currentSongIndex].artist}</li>
                                <li>by: {songData[currentSongIndex].artist}</li>

                            </ul>
                        </div>
                        <div className="item audio-element">
                            <audio
                                controls
                                src={songData[currentSongIndex].audioSrc}
                                ref={audioE1}
                                muted={true}
                            >
                            </audio>
                            <div>
                                <button className='playerControls' onClick={() => { setCurrentSongIndex(previousSong) }}>Previous</button>
                                <button className='playerControls' onClick={() => { setCurrentSongIndex(nextSongIndex) }}>Next</button>
                                <button className='playerControls' onClick={getRanSongIndex}>Shuffle</button>
                                <button className='playerControls' onClick={muteUnmute}>Mute/Unmute</button>
                                {/* <button className='playerControls' onClick={show}>showTime</button> */}
                                <div>
                                    <span>{currentDuration}</span>
                                    <span> / {currentTrackLength}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
            </section>
        </>
    )
}

export default UiBlock