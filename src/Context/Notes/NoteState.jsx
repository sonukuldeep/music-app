import NoteContext from "./NoteContext";
import React, {useState} from "react";

const NoteState = (props) => {
  const [state, setState] = useState(
 [{
    'title': 'Tuesday',
    'artist': 'Amaksi',
    'image': '',
    'audioSrc': 'https://cdn.pixabay.com/download/audio/2022/08/25/audio_4f3b0a816e.mp3?filename=tuesday-glitch-soft-hip-hop-118327.mp3'
  },
  {
    'title': 'The Blackest Bouquet',
    'artist': 'Leonell Cassio',
    'image': '',
    'audioSrc': 'https://cdn.pixabay.com/download/audio/2022/08/31/audio_419263fc12.mp3?filename=leonell-cassio-the-blackest-bouquet-118766.mp3'
  },
  {
    'title': 'Goldn',
    'artist': 'Prazkhal',
    'image': '',
    'audioSrc': 'https://cdn.pixabay.com/download/audio/2022/08/04/audio_2dde668d05.mp3?filename=goldn-116392.mp3'
  },
  {
    'title': 'Milk Shake',
    'artist': 'Coma-media',
    'image': '',
    'audioSrc': 'https://cdn.pixabay.com/download/audio/2022/08/03/audio_54ca0ffa52.mp3?filename=milk-shake-116330.mp3'
  }
  ])

  return (
    <NoteContext.Provider value={state} stateFun={setState}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;