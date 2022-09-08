import React, {useState, useEffect } from 'react'

const Playlist = ({playlistData,songs,trigger}) => {
  const [filter, setFilter] = useState(
    playlistData.filter((song)=>{
      return song.status === true
    }))

    useEffect(()=>{
      setFilter(playlistData.filter((song)=>{
        return song.status === true
      }))
    },[trigger,playlistData])

  return (
    <>
        {filter.map((x)=>{
          return <div>{songs[x.id].title} by {songs[x.id].artist}</div>
        })}
    </>
  )
}

export default Playlist