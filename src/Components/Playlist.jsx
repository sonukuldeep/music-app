import React from 'react'

const Playlist = ({title,artist}) => {
    
  return (
    <div>
        <button>{title} by {artist}</button>
    </div>
  )
}

export default Playlist