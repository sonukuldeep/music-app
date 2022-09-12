import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/PL.css'
const Playlist = ({songsOnPlaylist,songData,setCurrentSongIndex}) => {  //----> Parent UIBlock
  
  return (
    <>
        {songsOnPlaylist.map((item,index)=>{
          return <div className='playlistLinks'><Link to='#' key={index} onClick={()=>{setCurrentSongIndex(index)}}>{index+1}. {songData[index].title} by {songData[index].artist}</Link></div>
        })}
    </>
  )
}

export default Playlist