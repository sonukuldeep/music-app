import React, { useEffect } from 'react'

const Playlist = ({playlistData,songs}) => {
    const filter = playlistData.filter((song)=>{
      return song.status === true
    })

    useEffect(()=>{
      console.log(playlistData);
    },[filter])

  return (
    <div>
        {filter.map((x)=>{
          return <div>{songs[x.id].title}</div>
        })}
    </div>
  )
}

export default Playlist