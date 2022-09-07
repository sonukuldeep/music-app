import React from 'react'
import './SQ.css';


const SearchQuere = ({state, popupInvoke,songs}) => {
  return (
    <>
    <div className={state}>
        <div className="overlay"></div>
        <div className="content">
            <div className="close-btn" onClick={()=>{popupInvoke()}}>&times;</div>
            <h2>Title</h2>
            {songs.map((song,index)=>{
              return( <div key={index}>{song.title} {song.artist} <button>x</button></div>)
            })}
        </div>
    </div>
    </>
  )
}

export default SearchQuere