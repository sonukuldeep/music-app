import React, { useState, useContext } from 'react'
import './Styles/SQ.css';
import FilteredContext from '../Context/Notes/FilteredContext';
import PlaylistContext from '../Context/Notes/PlaylistContext';

const SearchQuere = ({ state, popupInvoke, songs }) => {      // parent ContextQueue
  // const [savedPlaylist, setSavedPlaylist] = useState([])
  const {songData} = useContext(PlaylistContext)
  const {filteredSongs,dispatch} = useContext(FilteredContext)
  
  // const playlistInLocalStorage = JSON.parse(localStorage.getItem('playlist'))
  // const [playlistStatus, setPlaylistStatus] = useState(PlaylistStatusGen(songs,playlistInLocalStorage));
  

  const addSong = (songIndex) => {
    let song = songData[songIndex]
    let check;
    dispatch({type: 'update', songid: song.songid})
    
    // check = savedPlaylist.findIndex((songInPlaylist) => {
    //   return songInPlaylist.id === song.id;
    // })

    // if (check === -1) {
      // setSavedPlaylist([...savedPlaylist, song])
      
      // setPlaylistStatus(ModifyBtnStatus(playlistStatus,song)) 
    // }
    // else {
    //   setPlaylistStatus(ModifyBtnStatus(playlistStatus,song)) 


      // setSavedPlaylist(savedPlaylist.filter((savedSongInPlaylist) => {
      //   return savedSongInPlaylist.id !== song.id
      // }))
    // }
    
  }

 // saving playlist for future sessions
  // useEffect(() => {
  //   // localStorage.setItem('playlist',JSON.stringify(savedPlaylist))
  //   localStorage.setItem('playlist',JSON.stringify(playlistStatus))


  // }, [playlistStatus])



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