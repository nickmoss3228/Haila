import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ audioSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    
    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);
  
  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  
  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  
  const onProgressChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setCurrentTime(audio.currentTime);
  };
  
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };
  
  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioSrc} />
      <h2>{title}</h2>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="progress-bar-wrapper">
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={onProgressChange}
        />
      </div>
      <div className="time-info">
        <span className="current-time">{formatTime(currentTime)}</span>
        <span className="duration">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;