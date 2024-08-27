import React from 'react';
import Repetition from './Repetition';

const AudioList = ({ aspect, unit, data, level }) => {
  const audioNumbers = data[unit];

  const getAudioSource = (audioFileName) => `/${level}/studentsbook/${audioFileName}.mp3`;

  return (
    <div>
      <h2>{aspect} - {unit}</h2>
      <ul>
        {audioNumbers.split(', ').map(audio => (
          <li key={audio}>
            <div>{audio}</div>
            <audio controls>
              <source src={getAudioSource(audio)} type="audio/mpeg" />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AudioList;