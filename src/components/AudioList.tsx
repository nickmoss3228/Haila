import React, {useRef, useState} from 'react';
import Repetition from './Repetition';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioList = ({ aspect, unit, data, level }) => {

  const audioNumbers = data[unit];
  const [currentAudio, setCurrentAudio] = useState(null)
  const audioRef = useRef(null)
    
  const playAudio = (audio) => {
    setCurrentAudio(audio)
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  const getAudioSource = (audioFileName:string) => `/${level}/studentsbook/${audioFileName}.mp3`;

  return (
    <div className='audiolist-render'>
      <div className='audiolist-name'>{aspect} - {unit}</div>
      <ul className='audios'>
        {audioNumbers.split(', ').map(audio => (
          // <li key={audio}>
          //   <div>{audio}</div>
            <button onClick={() => playAudio(audio)} className='btn-unit-number'>{audio}</button>
          // </li>
        ))}
      </ul>

      <AudioPlayer
        src={getAudioSource(currentAudio)}
        onPlay={e => console.log("onPlay")}
      />

    </div>
  );
}

export default AudioList;

        {/* <div className="audio-player">
        <audio ref={audioRef} controls>
          {currentAudio && <source src={getAudioSource(currentAudio)} type="audio/mpeg" />}   
        </audio>
      </div> */}
