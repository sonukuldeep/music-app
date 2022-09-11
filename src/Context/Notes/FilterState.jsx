import PlaylistContext from "./PlaylistContext";
import FilteredContext from "./FilteredContext";
import { useReducer, useContext, useEffect } from "react";

import React from 'react'

const FilterState = (props) => {
    const { songData, setSongData } = useContext(PlaylistContext)
    const songsInLocalStorage = JSON.parse(localStorage.getItem('playlist'))
    const [filteredSongs, dispatch] = useReducer(reducer, PlaylistStatusGen(songData, songsInLocalStorage))


    useEffect(() => {
        fetch('http://localhost:5000/playlist')
            .then(res => { return res.json(); })
            .then(data => {
                setSongData(data);
                dispatch({ type: 'setFilteredSongs', payload: data, localstorage: songsInLocalStorage })
            })
    }, [setSongData, songsInLocalStorage]);


    return (
        <FilteredContext.Provider value={{ filteredSongs, dispatch }}>
            {props.children}
        </FilteredContext.Provider>
    )
}

//reducer function
function reducer(filteredSongs, action) {
    const { type, songid, payload, localstorage } = action
    
    switch (type) {
        case 'update':
            const temp = filteredSongs.map(item => {
                if (item.songid === songid)
                    return ({ ...item, status: !item.status })
                return item;
            })
            return (temp)

        case 'setFilteredSongs':
            return PlaylistStatusGen(payload, localstorage)

        default:
            return filteredSongs
    }

}


//filter function
function PlaylistStatusGen(songs, playlistInLocalStorage) {
    if (playlistInLocalStorage) return playlistInLocalStorage;
    let temp = [];
    songs.length > 0 && songs.forEach((song, index) => {
        temp[index] = { 'songid': song.songid, 'status': false }
    })

    return temp;
}

export default FilterState