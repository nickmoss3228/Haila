import React, { useState } from "react";
import "../styles/Levels.css";
import { levelAudios } from "../components/levelAudios";
import LevelSelector from "../components/LevelSelector";
import AspectSelector from "../components/AspectSelector";
import UnitSelector from "../components/UnitSelector";
import AudioList from "../components/AudioList";
import { IoArrowBack } from "react-icons/io5";
import type { UnitData} from "../components/types";
import type { Level } from "../components/types"

const Levels: React.FC = () => {
  const [aspect, setAspect] = useState<string | null>(null);
  const [unit, setUnit] = useState<string | null>(null);
  const [level, setLevel] = useState<Level | null>(null);

  const handleLevelChange = (selectedLevel: Level): void => {
    setLevel(selectedLevel);
    setUnit(null);
    setAspect(null);
  };

  const handleAspectChange = (selectedAspect: string): void => {
    setUnit(null);
    setAspect(selectedAspect);
  };

  const handleUnitChange = (selectedUnit: string): void => {
    setUnit(selectedUnit);
  };

  const getAudiosForAspect = (): UnitData => {
    if (!level || !aspect) return {};

    const levelData = levelAudios[level]; 

  const aspectData = levelData.find((item) => aspect in item);
  
  if (!aspectData) return {};
  
  // type assertion to tell TypeScript that aspect is a key in aspectData
  return (aspectData as any)[aspect] || {};
  };

  const goBackToLevel = (): void => {
    setLevel(null);
    setAspect(null);
    setUnit(null);
  };

  const goBackToAspect = (): void => {
    setAspect(null);
    setUnit(null);
  };

  const goBackToUnit = (): void => {
    setUnit(null);
  };

  return (
    <div className="levels">
      {!level && <LevelSelector onChange={handleLevelChange} />}

      {level && !aspect && (
        <div className="aspect-select">
          <button onClick={goBackToLevel} className="btn-back">
            <IoArrowBack size={40}/>
          </button>
          <AspectSelector onChange={handleAspectChange} level={level} />
        </div>
      )}

      {aspect && !unit && level &&(
        <div className="unitselector">
          <button onClick={goBackToAspect} className="btn-back">
            <IoArrowBack size={40}/>
          </button>
          <UnitSelector
            aspect={aspect}
            data={getAudiosForAspect()}
            onChange={handleUnitChange}
            level={level}
          />
        </div>
      )}

      {aspect && unit && level && (
        <div className="audiolist">
          <button onClick={goBackToUnit} className="btn-back">
            <IoArrowBack size={40}/>
          </button>
          <AudioList
            aspect={aspect}
            unit={unit}
            level={level}
            data={getAudiosForAspect()}
          />
        </div>
      )}
    </div>
  );
};

export default Levels;
