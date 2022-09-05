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

    useEffect(() => {
        setNextSongIndex(() => {
            audioE1.current.play();
            return ((currentSongIndex + 1) > (songData.length - 1) ? 0 : (currentSongIndex + 1));
        }
        )
        setPreviousSong(()=>{
            return (currentSongIndex === 0) ? (songData.length - 1) : (currentSongIndex - 1)
        })
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
                                
                            </ul>
                        </div>
                        <div className="item audio-element">
                            <audio
                                controls
                                src={songData[currentSongIndex].audioSrc}
                                ref={audioE1}
                            >
                            </audio>
                            <div>
                            <button className='playerControls' onClick={() => { setCurrentSongIndex(previousSong) }}>Previous</button>
                            <button className='playerControls' onClick={() => { setCurrentSongIndex(nextSongIndex) }}>Next</button>
                            </div>
                        </div>
                    </div>

                </article>
            </section>
        </>
    )
}

export default UiBlock