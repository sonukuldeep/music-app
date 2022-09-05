import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ tracks }) => {
	// State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
	const { title, artist, image, audioSrc } = tracks[trackIndex];

	// Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

	// Destructure for conciseness
	const { duration } = audioRef.current;

    const toPrevTrack = () => {
        console.log('TODO go to prev');
      }
    
      const toNextTrack = () => {
        console.log('TODO go to next');
      }

	return ( ... );
}

export default AudioPlayer;