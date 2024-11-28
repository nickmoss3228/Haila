import React, {useState} from 'react'
import AudioLevelSelector from '../components/AudioLevelSelector';
import '../styles/AudioLevels.css'

const AudioLevels = () => {

    const [level, setLevel] = useState(null);
    const [audio, setAudio] = useState(null);
    const [chosenAudio, setChosenAudio] = useState(null)

    const handleLevelChange = (selectedLevel) => {
        setLevel(selectedLevel);    
      };
    

  return (
    <div className='audiolevels-overlay'>
        {!level && <AudioLevelSelector onChange={handleLevelChange}></AudioLevelSelector>}

        {level && !chosenAudio }
    </div>
  )
}

export default AudioLevels