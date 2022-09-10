import React, {useState, useEffect } from 'react'

const Playlist = ({playlistData,songs,trigger}) => {
  const [filter, setFilter] = useState([])
  
  useEffect(()=>{
    if(playlistData !== null) {
      setFilter(playlistData.filter((song)=>{
        return song.status === true
      }))
    }
  },[])  

    useEffect(()=>{
      setFilter(playlistData.filter((song)=>{
        return song.status === true
      }))
    },[trigger,playlistData])

  return (
    <>
        {filter.map((x,index)=>{
          return <div key={index}>{songs[x.id].title} by {songs[x.id].artist}</div>
        })}
    </>
  )
}

export default Playlist