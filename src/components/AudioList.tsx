import React, {useState, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioList = ({ aspect, unit, data, level }) => {

  const audioNumbers = data[unit];
  console.log(audioNumbers)
  const aspectshow = aspect;
  console.log(aspectshow)

  const [currentMedia, setCurrentMedia] = useState({ type: null, source: null });

  useEffect(() => {
    console.log("Current media state:", currentMedia);
  }, [currentMedia]);

  const playMedia = (mediaNumber) => {
    const mediaSource = getMediaSource(mediaNumber);
  
    if (mediaSource) {
      setCurrentMedia({ type: mediaSource.type, source: mediaSource.source });
    } else {
      console.error(`Error: No media found for media number ${mediaNumber}`);
      setCurrentMedia({ type: null, source: null });
    }
  };
  
  const getMediaSource = (fileName) => {
    const videoPath = `/${level}/Video/${aspect}/${fileName}.mp4`;
    const audioPath = `/${level}/studentsbook/${fileName}.mp3`;

    const videoPathObject = {
      type: "video",
      source: videoPath
    }
    const audioPathObject = {
      type: "audio",
      source: audioPath
    }
    return fileName ? audioPathObject : videoPathObject 
    // if (audioPath) {
    //   return { type: 'audio', source: audioPath };
    // } else if (videoPath) {
    //   return { type: 'video', source: videoPath };
    // }
    // return null;
  };

  //return ? audioPathObject : videoPathObject 

  return (
    <div className='audiolist-render'>
      <div className='audiolist-name'>{aspect} - {unit}</div>
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
        {currentMedia.type === 'audio' && currentMedia.source && (
          <AudioPlayer
            src={currentMedia.source}
            onPlay={e => console.log("onPlay")}
            style={{height: "120px"}}
            className='player'
          />
        )}
        {currentMedia.type === 'video' && currentMedia.source && (
          <video
            src={currentMedia.source}
            controls
            style={{width: "100%", maxHeight: "360px"}}
            className='video-player'
            type="video/mp4"
          />
        )}
      </div>
    </div>
  );
};

export default AudioList;


// import React, {useRef, useState} from 'react';
// import Repetition from './Repetition';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

// const AudioList = ({ aspect, unit, data, level }) => {

//   const audioNumbers = data[unit];
//   const [currentAudio, setCurrentAudio] = useState(null)
//   const audioRef = useRef(null)
    
//   const playAudio = (audio) => {
//     setCurrentAudio(audio)
//     if (audioRef.current) {
//       audioRef.current.load();
//       audioRef.current.play();
//     } 
//   }

//   const getAudioSource = (audioFileName:string) => `/${level}/studentsbook/${audioFileName}.mp3`;

//   return (
//     <div className='audiolist-render'>
//       <div className='audiolist-name'>{aspect} - {unit}</div>
//       <ul className='audios'>
//         {audioNumbers.split(', ').map(audio => (
//             <button onClick={() => playAudio(audio)} className='btn-unit-number'>{audio}</button>
//         ))}
//       </ul>
//       <div className="audioplayer-container">
//         <AudioPlayer
//           src={getAudioSource(currentAudio)}
//           onPlay={e => console.log("onPlay")}
//           style={{height: "120px"}}
//           className='player'
//           // showSkipControls={true}
//         />
//       </div>
      

//     </div>
//   );
// }

// export default AudioList;


// Mock function to represent file existence check
  // const fileExists = (filePath) => {
  //   // Implement actual check to see if file exists in the specified path
  //   // For example, using a server-side check or API call
  //   // This is a placeholder implementation
  //   return true;
  // };

  // const playMedia = (mediaNumber) => {
  //   const audioSource = getAudioSource(mediaNumber);
  //   const videoSource = getVideoSource(mediaNumber);

  //   if (videoSource) {
  //     setCurrentMedia({ type: 'video', source: videoSource });
  //   } else if (audioSource) {
  //     setCurrentMedia({ type: 'audio', source: audioSource });
  //   } else {
  //     console.error(`Error: No media found for unit ${unit}, number ${mediaNumber}`);
  //     setCurrentMedia({ type: null, source: null });
  //   }
  // };

  // const getAudioSource = (audioFileName) => {
  //   // Implement similar to getVideoSource if needed. For example:
  //   // const audioPath = `/${level}/audio/${audioFileName}.mp3`;
  //   // return fileExists(audioPath) ? audioPath : null;
  //   return `/${level}/studentsbook/${audioFileName}.mp3`; // Example path
  // };

  // const getVideoSource = (videoFileName) => {
  //   const videoPath = `/${level}/Video/${aspect}/${videoFileName}.mp4`;
  //   return videoPath
  // };

  // const fileExists = (path) => {
  //   // Implement a function to check if the file exists at the given path
  //   // You can use the Fetch API or a library like fs (for Node.js) to do this
  //   // Return true if the file exists, false otherwise
  //   return true; // Replace with actual implementation
  // };