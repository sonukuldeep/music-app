import React, { useState, useEffect } from 'react'
import './Styles/SQ.css';


const SearchQuere = ({ state, popupInvoke, songs }) => {      // parent ContextQueue
  // const [savedPlaylist, setSavedPlaylist] = useState([])
  const playlistInLocalStorage = JSON.parse(localStorage.getItem('playlist'))
  const [playlistStatus, setPlaylistStatus] = useState(PlaylistStatusGen(songs,playlistInLocalStorage));
  

  const addSong = (songIndex) => {
    let song = songs[songIndex]
    let check;
    
    // check = savedPlaylist.findIndex((songInPlaylist) => {
    //   return songInPlaylist.id === song.id;
    // })

    if (check === -1) {
      // setSavedPlaylist([...savedPlaylist, song])
      
      setPlaylistStatus(ModifyBtnStatus(playlistStatus,song)) 
    }
    else {
      setPlaylistStatus(ModifyBtnStatus(playlistStatus,song)) 


      // setSavedPlaylist(savedPlaylist.filter((savedSongInPlaylist) => {
      //   return savedSongInPlaylist.id !== song.id
      // }))
    }
    
  }

 // saving playlist for future sessions
  useEffect(() => {
    // localStorage.setItem('playlist',JSON.stringify(savedPlaylist))
    localStorage.setItem('playlist',JSON.stringify(playlistStatus))


  }, [playlistStatus])



  return (
    <>
      <div className={state}>
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={() => { popupInvoke() }}>&times;</div>
          <h2 className='title'>Title</h2>
          <div className="song-list">{songs.map((song, index) => {
            return (<div key={index}><button className={`song-list-btn btn-status-${playlistStatus[index].status}`} onClick={() => { addSong(index) }}>{song.title} {song.artist}</button></div>)
          })}</div>
        </div>
      </div>
    </>
  )
}


//status of button in popup
function PlaylistStatusGen(songs,playlistInLocalStorage) {
  if(playlistInLocalStorage) return playlistInLocalStorage;
  let temp = [];
  songs.forEach((song,index) => {
    temp[index] = {'id': song.songid,'status': false}
  })
  return temp;
}

// modity btn status
function ModifyBtnStatus(btnStatus,song) {
  let temp = [...btnStatus];
      temp[song.songid].status = !temp[song.songid].status;
      return temp;
}


export default SearchQuere