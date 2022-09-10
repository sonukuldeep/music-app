import PlaylistContext from "./PlaylistContext";
import React, { useState} from "react";

const PlaylistState = (props) => {
  const [songData, setSongData] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:5000/playlist')           -----> fetching songData in FilterState.jsx
  //     .then(res => { return res.json(); })
  //     .then(data => {
  //       setSongData(data);

  //     })
  // }, []);

  // Same as above
  // useEffect(() => {
  //   const getSongs = async () => {
  //     const resFromServer = await fetchSongs()
  //     setState(resFromServer)
  //   }
  //   getSongs()
  // }, [])

  // const fetchSongs = async () => {
  //   const res = await fetch('http://localhost:5000/playlist')
  //   const data = await res.json()
  //   return data
  // }

  return (
    <PlaylistContext.Provider value={{songData, setSongData}}>
      {props.children}
    </PlaylistContext.Provider>
  )
}

export default PlaylistState;