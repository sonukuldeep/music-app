import './Styles/UB.css';
import React, { useContext, useState, useEffect, useRef } from "react";
import PlaylistContext from "../Context/Notes/PlaylistContext";
import FilteredContext from '../Context/Notes/FilteredContext';
import Playlist from './Playlist';
import back from '../images/icons/back.png'
import pause from '../images/icons/pause.png'
import play from '../images/icons/play.png'
import shuffle from '../images/icons/shuffle.png'
import mute from '../images/icons/volume-mute.png'
import vol from '../images/icons/volume.png'

const UiBlock = ({ trigger }) => {
    // context
    const { songData } = useContext(PlaylistContext);

    //get playlist
    const { filteredSongs } = useContext(FilteredContext)

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
    const [albumArt, setAlbumArt] = useState()

    // use ref
    const audioE1 = useRef(0)
    const volumeSlider = useRef(0)
    const playPause = useRef()
    const muteUnmuted = useRef()

    //random function for shuffle
    function getRanSongIndex() {
        setCurrentSongIndex(Math.floor(Math.random() * songData.length))
    }

    // mute unmute function
    function muteUnmute() {
        audioE1.current.muted = !audioE1.current.muted
        audioE1.current.muted ? muteUnmuted.current.src = mute : muteUnmuted.current.src = vol
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

        setSongsOnPlaylist(filteredSongs.filter((song) => {
            return song.status === true
        }))

    }, [trigger, filteredSongs])

    // setting next song index, previous song index and current track length
    useEffect(() => {
        audioE1.current.play()

        //set album art
        setAlbumArt(songData[currentSongIndex].image)

        setNextSongIndex(() => {

            return ((currentSongIndex + 1) > (songsOnPlaylist.length - 1) ? 0 : (currentSongIndex + 1));
        }
        )
        setPreviousSong(() => {

            return (currentSongIndex === 0) ? (songsOnPlaylist.length - 1) : (currentSongIndex - 1)
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

    }, [currentSongIndex, songData.length])


    // play pause functionality
    useEffect(() => {
        if (isPlaying) {
            audioE1.current.play()
            playPause.current.src = pause
        }
        else {
            audioE1.current.pause()
            playPause.current.src = play

        }

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
                            <Playlist songsOnPlaylist={songsOnPlaylist} songData={songData} setCurrentSongIndex={setCurrentSongIndex} />
                        </div>
                        <div className="item audio-element">
                            <audio
                                // controls
                                src={songData[currentSongIndex].audioSrc}
                                ref={audioE1}
                                muted={false}
                            >
                            </audio>
                            <div className='controlsContainer'>
                                <div>
                                    <button className='playerControls' onClick={getRanSongIndex}><img src={shuffle} alt='shuffle'></img></button>
                                    <button className='playerControls' onClick={() => { setCurrentSongIndex(previousSong) }}><img src={back} alt='back'></img></button>
                                    <button className='playerControls' onClick={() => { setIsPlaying(!isPlaying) }}><img ref={playPause} src='' alt='play'></img></button>
                                    <button className='playerControls' onClick={() => { setCurrentSongIndex(nextSongIndex) }}><img src={back} alt='next'></img></button>
                                    <button className='playerControls' onClick={muteUnmute}><img ref={muteUnmuted} src='' alt='volume'></img></button>
                                </div>
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