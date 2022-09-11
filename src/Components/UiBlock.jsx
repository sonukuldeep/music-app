import './Styles/UB.css';
import albumArt from "../images/album-art.png";
import React, { useContext, useState, useEffect, useRef } from "react";
import PlaylistContext from "../Context/Notes/PlaylistContext";
import FilteredContext from '../Context/Notes/FilteredContext';
import Playlist from './Playlist';


const UiBlock = ({trigger}) => {
    // context
    const {songData} = useContext(PlaylistContext);

    //get playlist
    const {filteredSongs} = useContext(FilteredContext)

    //playlist but only true values
    const [songsOnPlaylist, setSongsOnPlaylist] = useState([])

    // use state
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(1);
    const [previousSong, setPreviousSong] = useState()
    const [currentTrackLength, setCurrentTrackLength] = useState(0)
    const [currentDuration, setCurrentDuration] = useState(0)
    const [volume, setVolume] = useState(50)


    // use ref
    const audioE1 = useRef(0)
    const volumeSlider = useRef(0)

    //random function for shuffle
    function getRanSongIndex() {
        setCurrentSongIndex(Math.floor(Math.random() * songData.length))
    }

    // mute unmute function
    function muteUnmute() {
        audioE1.current.muted = !audioE1.current.muted
    }

    // time formating
    const timeFormating = (timeInSeconds) => { return (new Date(timeInSeconds * 1000).toISOString().substring((timeInSeconds > 3600) ? 11 : (timeInSeconds > 60) ? 14 : 15, 19)) }

    // need to replace this with a better solution
    setInterval(() => {

        try {
            let duration = Math.ceil(audioE1.current.currentTime)            
            setCurrentDuration(timeFormating(duration))
        }
        catch (err) {
            console.log('timeformat function timeout')
        }
    }, 1000);


    useEffect(() => {

        setSongsOnPlaylist(filteredSongs.filter((song)=>{
          return song.status === true
        }))
        
      }, [trigger,filteredSongs])  

    // setting next song index, previous song index and current track length
    useEffect(() => {
        audioE1.current.play()

        setNextSongIndex(() => {
            return ((currentSongIndex + 1) > (songData.length - 1) ? 0 : (currentSongIndex + 1));
        }
        )
        setPreviousSong(() => {
            return (currentSongIndex === 0) ? (songData.length - 1) : (currentSongIndex - 1)
        })

        //need a better solution
        try {
            setTimeout(() => {
                let trackLength = Math.floor(audioE1.current.duration)
                setCurrentTrackLength(timeFormating(trackLength))

            }, 200);                                                            // change this too
        } catch {
            setTimeout(() => {
                let trackLength = Math.floor(audioE1.current.duration)
                setCurrentTrackLength(timeFormating(trackLength))

            }, 1500);
        }

    }, [currentSongIndex,songData.length])


    // play pause functionality
    useEffect(() => {
        isPlaying ? audioE1.current.play() : audioE1.current.pause()

    }, [isPlaying])

    // volume control
    useEffect(() => {
        audioE1.current.volume = volume / 100
    }, [volume])



    return (
        <>
            <section >
                <article className='UI-block-container'>
                    <div className='UI-block'>
                        <div className="item">
                            <img src={albumArt} alt='album art'></img>
                        </div>
                        <div className="item">
                            <Playlist songsOnPlaylist={songsOnPlaylist} songData={songData} setCurrentSongIndex={setCurrentSongIndex}/>
                        </div>
                        <div className="item audio-element">
                            <audio
                                // controls
                                src={songData[currentSongIndex].audioSrc}
                                ref={audioE1}
                                muted={false}
                            >
                            </audio>
                            <div>
                                <button className='playerControls' onClick={() => { setCurrentSongIndex(previousSong) }}>Previous</button>
                                <button className='playerControls' onClick={() => { setCurrentSongIndex(nextSongIndex) }}>Next</button>
                                <button className='playerControls' onClick={getRanSongIndex}>Shuffle</button>
                                <button className='playerControls' onClick={muteUnmute}>Mute/Unmute</button>
                                <button className='playerControls' onClick={() => { setIsPlaying(!isPlaying) }}>Play/Pause</button>
                                <div>
                                    <span>{currentDuration}</span>
                                    <span> / {currentTrackLength}</span>
                                </div>
                                <div className="volumeSlider">
                                    <input type="range" min={0} max={100} ref={volumeSlider} onChange={(e) => { setVolume(e.target.value) }} />
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