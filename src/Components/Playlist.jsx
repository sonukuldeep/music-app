import React, {useState, useEffect } from 'react'

const Playlist = ({playlistData,songs,trigger}) => {  //----> Parent UIBlock
  const [filteredSongs, setFilteredSongs] = useState([])
  
  useEffect(()=>{
    if(playlistData !== null) {
      setFilteredSongs(playlistData.filter((song)=>{
        return song.status === true
      }))
    }
  },[])  

    useEffect(()=>{
      setFilteredSongs(playlistData.filter((song)=>{
        return song.status === true
      }))
    },[trigger,playlistData])

  return (
    <>
        {filteredSongs.map((item,index)=>{
          return <div key={index}>{songs[item.id].title} by {songs[item.id].artist}</div>
        })}
    </>
  )
}

export default Playlist