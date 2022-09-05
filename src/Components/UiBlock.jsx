import './UB.css'
;import albumArt from "../images/album-art.png";
import React, { useContext, useState, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import { Link } from 'react-router-dom';


const UiBlock = () => {
    const data = useContext(NoteContext);
    const [musicScr, setMusicScr] = useState("")
    const play = index => {
        // const audioEl = document.querySelector('audio')
        // audioEl.play();
        setMusicScr(data[index].src)
        console.log(musicScr);

    }

    useEffect(() => {
        const audioEl = document.querySelector('audio')
        // audioEl.pause();
        audioEl.play();
    }, [musicScr])
    
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
                            <li><span>Song:- <Link to="#" onClick={()=>{play(0)}}>{data[0].title} by: {data[0].artist}</Link></span></li>
                            <li><span>Song:- <Link to="#" onClick={()=>{play(1)}}>{data[1].title} by: {data[1].artist}</Link></span></li>
                            <li><span>Song:- <Link to="#" onClick={()=>{play(2)}}>{data[2].title} by: {data[2].artist}</Link></span></li>
                            <li><span>Song:- <Link to="#" onClick={()=>{play(3)}}>{data[3].title} by: {data[3].artist}</Link></span></li>
                            </ul>
                        </div>
                        <div className="item audio-element">
                        <audio controls> 
                            <source src={musicScr} type="audio/mpeg"/>
                            </audio>
                        </div>
                    </div>

                </article>
            </section>
    </>
  )
}

export default UiBlock