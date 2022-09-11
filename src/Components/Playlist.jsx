import React from 'react'
import { Link } from 'react-router-dom'

const Playlist = ({songsOnPlaylist,songData,setCurrentSongIndex}) => {  //----> Parent UIBlock
  
  return (
    <>
        {songsOnPlaylist.map((item,index)=>{
          return <Link to='#' key={index} onClick={()=>{setCurrentSongIndex(index)}}><div>{songData[index].title} by {songData[index].artist}</div></Link>
        })}
    </>
  )
}

export default Playlist