import React from 'react'
import './SQ.css';

const SearchQuere = ({state, popupInvoke}) => {
  return (
    <>
    <div className={state}>
        <div className="overlay"></div>
        <div className="content">
            <div className="close-btn" onClick={()=>{popupInvoke()}}>&times;</div>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni asperiores harum nulla temporibus facilis doloremque ex, sed voluptatem voluptate aspernatur.</p>
        </div>
    </div>
    </>
  )
}

export default SearchQuere