import React, {useState, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioList = ({ aspect, unit, data, level}) => {

  const audioNumbers = data[unit];

  const [currentMedia, setCurrentMedia] = useState({ audio: null, video: null, workbook: null});
  const [activePlayer, setActivePlayer] = useState(null); // 'audio' or 'video'

  useEffect(() => {
    console.log("Current media state:", currentMedia);
    console.log("Active player:", activePlayer);
  }, [currentMedia]);

  const playMedia = (mediaNumber) => {
    const mediaSources = getMediaSource(mediaNumber);
    console.log(mediaSources)
    let newActivePlayer = null;

    if (aspect === "Video Listening" || aspect === "Practical English" || aspect === "Revise And Check") {
      newActivePlayer = mediaSources.video ? 'video' : null;
    } else if (aspect === "Listening" || aspect === "Vocabulary") {
      newActivePlayer = mediaSources.audio ? 'audio' : null;
    } else if (aspect === "Workbook") {
      newActivePlayer = mediaSources.workbook ? 'workbook' : null;
    }

    setCurrentMedia(mediaSources);
    setActivePlayer(newActivePlayer);
  };

  const getMediaSource = (mediaNumber) => {
    const videoPath = `/${level}/Video/${aspect}/${mediaNumber}.mp4`;
    const audioPath = `/${level}/studentsbook/${mediaNumber}.mp3`;
    const workbookPath = `/${level}/workbook/${mediaNumber}.mp3`

    return {
      video: aspect === "Video Listening" || aspect === "Practical English" || aspect === "Revise And Check" ? videoPath : null,
      audio: aspect === "Listening" || aspect === "Vocabulary" ? audioPath : null,
      workbook: aspect === "Workbook" ? workbookPath : null,
    };
  };
  
  return (
    <div className='audiolist-render'>
      <div className='audiolist-name'>{unit}</div>
      <ul className='audios'>
      {audioNumbers.split(', ').map(mediaNumber => (
        <button
          key={mediaNumber}
          onClick={() => playMedia(mediaNumber)}
          className='btn-unit-number'
        >
          {mediaNumber}
        </button>
      ))}
      </ul>
      <div className="media-player-container">
      {activePlayer === 'audio' && currentMedia.audio && (
        <AudioPlayer
          src={currentMedia.audio}
          onPlay={e => console.log("onPlay audio")}
          style={{ height: "120px" }}
          className='player'
        />
      )}
      {activePlayer === 'workbook' && currentMedia.workbook && (
        <AudioPlayer
          src={currentMedia.workbook}
          onPlay={e => console.log("onPlay workbook")}
          style={{ height: "120px" }}
          className='audio-player'
        />
      )}
      {activePlayer === 'video' && currentMedia.video && (
        <video
          src={currentMedia.video}
          controls
          style={{ width: "100%", maxHeight: "450px" }}
          className='video-player'
        />
      )}
    </div>
  </div>
);
};

export default AudioList;