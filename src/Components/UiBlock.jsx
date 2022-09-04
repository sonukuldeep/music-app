import albumArt from "../images/album-art.png";
import playControls from "../images/playControls.jpg";
import React, { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";


const UiBlock = () => {
    const data = useContext(NoteContext);
    // console.log(data);
  return (
    <>
      <section >
                <article className='UI-block-container'>
                    <div className='UI-block'>
                        <div className="item">
                            <img src={albumArt} alt='album art'></img>
                        </div>
                        <div className="item">
                            {/* <img src={playlist} alt='playlist'></img> */}
                            <p> this is the user name {data.name}</p>
                        </div>
                        <div className="item">
                            <img src={playControls} alt='play control'></img>
                        </div>
                    </div>

                </article>
            </section>
    </>
  )
}

export default UiBlock