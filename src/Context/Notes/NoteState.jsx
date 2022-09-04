import NoteContext from "./NoteContext";
import React from "react";

const NoteState = (props) => {
    const state = {
        'name': 'Sonu',
        'class': '2'
    }

  return (
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;