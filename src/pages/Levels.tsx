import React, { useState } from 'react'
import '../styles/Levels.css'
import {levelAudios } from '../components/levelAudios';
import LevelSelector from '../components/LevelSelector';
import AspectSelector from '../components/AspectSelector';
import UnitSelector from '../components/UnitSelector';
import AudioList from '../components/AudioList';
import { IoArrowBack } from "react-icons/io5";

const Levels = () => {
    const [level, setLevel] = useState(null);
    const [aspect, setAspect] = useState(null);
    const [unit, setUnit] = useState(null);

    const handleLevelChange = (selectedLevel) => {
        setLevel(selectedLevel);
        setAspect(null);
        setUnit(null);
      };
    
      const handleAspectChange = (selectedAspect) => {
        setAspect(selectedAspect);
        setUnit(null);
      };
    
      const handleUnitChange = (selectedUnit) => {
        setUnit(selectedUnit);
      };
    
      const getAudiosForAspect = () => {
        if (!level || !aspect) return [];
      
        const levelData = levelAudios[level]; // Get data for the current level
        if (!levelData) return []; // Return empty array if no data for the level
        
        const aspectData = levelData.find(a => Object.keys(a).includes(aspect));
        return aspectData ? aspectData[aspect] : {};
      };

      const goBackToLevel = () => {
        setLevel(null);
        setAspect(null);
        setUnit(null);
      };
    
      const goBackToAspect = () => {
        setAspect(null);
        setUnit(null);
      };
    
      const goBackToUnit = () => {
        setUnit(null);
      };
  

return (
  <div className='levels'>
    {!level && <LevelSelector onChange={handleLevelChange}/>}

    {level && !aspect && (
      <div>
        <button onClick={goBackToLevel} className='btn-back'>
          <IoArrowBack style={{width: "80px", border: "none", height:"40px", cursor:"pointer"}}/>
        </button>
        <AspectSelector onChange={handleAspectChange} level={level} />
      </div>
    )}
    {aspect && !unit && (
      <div>
        <button onClick={goBackToAspect} className='btn-back'>
          <IoArrowBack style={{width: "80px", border: "none", height:"40px", cursor:"pointer"}}/>
        </button>
        <UnitSelector aspect={aspect} data={getAudiosForAspect()} onChange={handleUnitChange} level={level}/>
    </div>
    )}
    {aspect && unit && (
    <div>
      <button onClick={goBackToUnit} className='btn-back'>
        <IoArrowBack style={{width: "80px", border: "none", height:"40px", cursor:"pointer"}}/>
      </button>
      <AudioList aspect={aspect} unit={unit} level={level} data={getAudiosForAspect()} />
    </div>
    )}
  </div>
);
}

export default Levels