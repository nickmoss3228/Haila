import React, {useState, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import type { AudioListProps } from '../components/types';

const YANDEX_BASE_URL = import.meta.env.VITE_YANDEX_BASE_URL;
console.log(YANDEX_BASE_URL)

const AudioList: React.FC<AudioListProps> = ({ aspect, unit, data, level}) => {

  const audioNumbers = data[unit];

  const [currentMedia, setCurrentMedia] = useState({ audio: null, video: null, workbook: null});
  const [activePlayer, setActivePlayer] = useState(null); // 'audio' or 'video'
  const [isLoading, setIsLoading] = useState(false); // Optional: for loading states
  const [error, setError] = useState(null); // Optional: for error handling

  useEffect(() => {
    console.log("Current media state:", currentMedia);
    console.log("Active player:", activePlayer);
  }, [currentMedia]);

  const playMedia = async (mediaNumber: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const mediaSources = await getMediaSource(mediaNumber);
      console.log(mediaSources);
      let newActivePlayer = null;

      if (["Video Listening", "Practical English", "Revise And Check"].includes(aspect)) {
        newActivePlayer = mediaSources.video ? 'video' : null;
      } else if (["Listening", "Vocabulary"].includes(aspect)) {
        newActivePlayer = mediaSources.audio ? 'audio' : null;
      } else if (aspect === "Workbook") {
        newActivePlayer = mediaSources.workbook ? 'workbook' : null;
      }

      setCurrentMedia(mediaSources);
      setActivePlayer(newActivePlayer);
    } catch (err) {
      console.error("Error fetching media source:", err);
      setError('Failed to load media. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getMediaSource = async (mediaNumber: string) => {
    const mediaSources = {
      video: ["Video Listening", "Practical English", "Revise And Check"].includes(aspect)
        ? `${YANDEX_BASE_URL}/${level}/Video/${aspect}/${mediaNumber}.mp4`
        : null,
      audio: ["Listening", "Vocabulary"].includes(aspect)
        ? `${YANDEX_BASE_URL}/${level}/studentsbook/${mediaNumber}.mp3`
        : null,
      workbook: aspect === "Workbook"
        ? `${YANDEX_BASE_URL}/${level}/workbook/${mediaNumber}.mp3`
        : null,
    };
    console.log("Constructed media URLs:", mediaSources);
    return mediaSources;
  }

   return (
    <div className='audiolist-render'>
      <div className='audiolist-name'>{unit}</div>
      <ul className='audios'>
        {audioNumbers.split(', ').map(mediaNumber => (
          <button
            key={mediaNumber}
            onClick={() => playMedia(mediaNumber)}
            className='btn-unit-number'
            disabled={isLoading} 
          >
            {mediaNumber}
          </button>
        ))}
      </ul>
      {isLoading && <p>Loading media...</p>} 

      {error && <p className="error">{error}</p>} 

      <div className="media-player-container">
        {activePlayer === 'audio' && currentMedia.audio && (
          <AudioPlayer
            src={currentMedia.audio}
            onPlay={e => console.log("onPlay audio")}
            style={{ height: "120px" }}
            className='audio-player'
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
            style={{ width: "100%", maxHeight: "400px" }}
            className='video-player'
          />
        )}
      </div>
    </div>
  );
};
export default AudioList;


  // const getMediaSource = (mediaNumber: string) => {
  //   const videoPath = `${YANDEX_BASE_URL}/${level}/Video/${aspect}/${mediaNumber}.mp4`;
  //   const audioPath = `${YANDEX_BASE_URL}/${level}/studentsbook/${mediaNumber}.mp3`;
  //   const workbookPath = `${YANDEX_BASE_URL}/${level}/workbook/${mediaNumber}.mp3`;
  
  //   return {
  //     video: ["Video Listening", "Practical English", "Revise And Check"].includes(aspect)
  //       ? videoPath
  //       : null,
  //     audio: ["Listening", "Vocabulary"].includes(aspect)
  //       ? audioPath
  //       : null,
  //     workbook: aspect === "Workbook" ? workbookPath : null,
  //   };
  // };
  