import React, { useContext } from 'react'
import './Styles/SQ.css';
import FilteredContext from '../Context/Notes/FilteredContext';
import PlaylistContext from '../Context/Notes/PlaylistContext';

const SearchQuere = ({ state, popupInvoke, songs }) => {      // parent ContextQueue
  const {songData} = useContext(PlaylistContext)
  const {filteredSongs,dispatch} = useContext(FilteredContext)
    

  const addSong = (songIndex) => {
    let song = songData[songIndex]
    dispatch({type: 'update', songid: song.songid})
  }

  return (
    <>
      <div className={state}>
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={() => { popupInvoke() }}>&times;</div>
          <h2 className='title'>Title</h2>
          <div className="song-list">{songData.map((song, index) => {
            return (<div key={index}><button className={`song-list-btn btn-status-${filteredSongs[index].status}`} onClick={() => { addSong(index) }}>{song.title} {song.artist}</button></div>)
          })}</div>
        </div>
      </div>
    </>
  )
}



export default SearchQuere