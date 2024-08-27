import React, { useState } from 'react'
import '../styles/Levels.css'
import { beginnerAudios, levelAudios } from '../components/levelAudios';
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


// .hiddenColorBeg {
//     position: absolute;
//     bottom: 0;  /* Start at the bottom */
//     left: 0;
//     right: 0;
//     height: 200px;
//     background-color: rgb(154, 0, 210);
//     padding: 10px;
//     box-sizing: border-box;
//     transform: translateY(100%);  /* Initially hidden (slid down) */
//     opacity: 0;
//     transition: transform 0.3s ease, opacity 0.3s ease;
//     background-color: var(--secondarycolor);
// }
// .hiddenColorElem {
//     position: absolute;
//     bottom: 0;  /* Start at the bottom */
//     left: 0;
//     right: 0;
//     height: 200px;
//     background-color: rgb(198, 12, 12);
//     padding: 10px;
//     box-sizing: border-box;
//     transform: translateY(100%);  /* Initially hidden (slid down) */
//     opacity: 0;
//     transition: transform 0.3s ease, opacity 0.3s ease;
//     background-color: var(--secondarycolor);
// }
// .hiddenColorPreInt{
//     position: absolute;
//     bottom: 0;  /* Start at the bottom */
//     left: 0;
//     right: 0;
//     height: 200px;
//     background-color: rgb(45, 42, 221);
//     padding: 10px;
//     box-sizing: border-box;
//     transform: translateY(100%);  /* Initially hidden (slid down) */
//     opacity: 0;
//     transition: transform 0.3s ease, opacity 0.3s ease;
// }
// .hiddenColorInter {
//     position: absolute;
//     bottom: 0;  /* Start at the bottom */
//     left: 0;
//     right: 0;
//     height: 200px;
//     background-color: rgb(25, 190, 31);
//     padding: 10px;
//     box-sizing: border-box;
//     transform: translateY(100%);  /* Initially hidden (slid down) */
//     opacity: 0;
//     transition: transform 0.3s ease, opacity 0.3s ease;
// }

// .level:hover .hiddenColor {
//     transform: translateY(0);  /* Slide up into view */
//     opacity: 1;
// }



// const elementaryAudios = [
//     {pronunciation: "numbers"}, 
//     {grammar: "numbers"}, 
//     {listening: "numbers"}, 
//     {vocabulary: "numbers"}, 
//     {videoListeningReviseAndCheck: "numbers"}, 
//     {practicalEngish: "numbers"}
// ]
// const preIntermediateAudios = [
//     {pronunciation: "numbers"}, 
//     {grammar: "numbers"}, 
//     {listening: "numbers"}, 
//     {vocabulary: "numbers"}, 
//     {videoListeningReviseAndCheck: "numbers"}, 
//     {practicalEngish: "numbers"}
// ]
// const intermediateAudios = [
//     {pronunciation: "numbers"}, 
//     {grammar: "numbers"}, 
//     {listening: "numbers"}, 
//     {vocabulary: "numbers"}, 
//     {videoListeningReviseAndCheck: "numbers"}, 
//     {practicalEngish: "numbers"}
// ]




//beginners:
//{pronunciation: 
    //          {unit1: "1.11, 1.12, 1.25, 1.26, 1.32, 1.33, 1.34"}, 
    //          {unit2: "2.2, 2.3, 2.4, 2.24, 2.25, 2.26"}, 
    //          {unit3: 3.5, 3.6, 3.7, 3.15, 3.16}, 
    //          {unit4: 4.5, 4.6, 4.21, 4.22, 4.23}, 
    //          {unit5: 5.8, 5.9, 5.17, 5.18, 5.19, 5.25, 5.26, 5.27},  
    //          {unit6: 6.6, 6.7, 6.17, 6.18}, 
    //          {unit7: 7.7, 7.8, 7.19, 7.25, 7.26}, 
    //          {unit8: 8.7, 8.8, 8.9, 8.10, 8.15, 8.16}, 
    //          {unit9: 9.4, 9.15, 9.16, 9.20}, 
    //          {unit10: 10.7, 10.8, 10.9, 10.17}, 
    //          {unit11: 11.4, 11.5, 11.14, 11.17, 11.19}, 
    //          {unit12: 2.1, 12.2}}, 
    //     {grammar: "1.4, 1.5, 1.6, 1.20, 1.21, 1.22, 1.23, 1.24, 2.5, 2.6, 2.7, 2.8, 2.9, 2.16, 2.17, 2.18, 3.2, 3.3, 3.4, 3.14, 4.7, 4.8, 4.9, 4.10, 4.19, 4.20, 5.5, 5.11, 5.12, 6.4, 6.5, 6.16, 7.5, 7.10, 7.11, 7.12, 7.13, 7.14, 7.15, 8.3, 8.4, 8.5, 8.6, 8.14, 9.1, 9.2, 9.3, 9.12, 9.13, 10.4, 10.5, 10.6, 10.11, 10.12, 10.13, 11.1, 11.2, 11.3, 11.12, 11.13, 12.5, 12.6, 12.7, 12.8, "}, 
    