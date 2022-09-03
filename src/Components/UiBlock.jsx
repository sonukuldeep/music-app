import React from 'react';
import albumArt from '../images/album-art.png';
import playlist from '../images/playlist.jpg';
import playControls from '../images/playControls.jpg';

const UiBlock = () => {
  return (
    <>
      <section >
                <article class='UI-block-container'>
                    <div className='UI-block'>
                        <div className="item">
                            <img src={albumArt} alt='album art'></img>
                        </div>
                        <div className="item">
                            <img src={playlist} alt='playlist'></img>
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