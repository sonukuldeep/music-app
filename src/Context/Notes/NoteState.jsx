import NoteContext from "./NoteContext";
import React, {useState} from "react";

const NoteState = (props) => {
  const [state, setState] = useState(
 [{
    'title': 'Tuesday',
    'artist': 'Amaksi',
    'image': '',
    'audioSrc': '../../Music/Baby be mine.mp3',
    'id': 0
  },
  {
    'title': 'The Blackest Bouquet',
    'artist': 'Leonell Cassio',
    'image': '',
    'audioSrc': '../../Music/Beat it.mp3',
    'id': 1
  },
  {
    'title': 'Goldn',
    'artist': 'Prazkhal',
    'image': '',
    'audioSrc': '../../Music/Billie Jean (home demo 1981).mp3',
    'id': 2
  },
  {
    'title': 'Milk Shake',
    'artist': 'Coma-media',
    'image': '',
    'audioSrc': '../../Music/Billie Jean.mp3',
    'id': 3
  },
  {
    'title': 'Milk Shake',
    'artist': 'Coma-media',
    'image': '',
    'audioSrc': '../../Music/Carousel.mp3',
    'id': 4
  },
  {
    'title': 'Milk Shake',
    'artist': 'Coma-media',
    'image': '',
    'audioSrc': '../../Music/Billie Jean.mp3',
    'id': 5
  },
  {
    'title': 'Milk Shake',
    'artist': 'Coma-media',
    'image': '',
    'audioSrc': '../../Music/Billie Jean.mp3',
    'id': 6
  },
  {
    'title': 'Milk Shake',
    'artist': 'Coma-media',
    'image': '',
    'audioSrc': '../../Music/Billie Jean.mp3',
    'id': 7
  }
  ])

  return (
    <NoteContext.Provider value={state} stateFun={setState}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;