import PlaylistContext from "./PlaylistContext";
import React, { useState, useEffect } from "react";

const NoteState = (props) => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/playlist')
      .then(res => { return res.json(); })
      .then(data => {
        setState(data);

      })
  }, []);

  return (
    <PlaylistContext.Provider value={state} stateFun={setState}>
      {props.children}
    </PlaylistContext.Provider>
  )
}

export default NoteState;