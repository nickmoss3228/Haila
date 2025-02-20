import React, { useState } from "react";
import "../styles/Levels.css";
import { levelAudios } from "../components/levelAudios";
import LevelSelector from "../components/LevelSelector";
import AspectSelector from "../components/AspectSelector";
import UnitSelector from "../components/UnitSelector";
import AudioList from "../components/AudioList";
import { IoArrowBack } from "react-icons/io5";
import type { UnitData } from "../components/types";

const Levels: React.FC = () => {
  const [aspect, setAspect] = useState<string | null>(null);
  const [unit, setUnit] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);

  const handleLevelChange = (selectedLevel: string): void => {
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

    const levelData = levelAudios[level]; // Get data for the current level
    if (!levelData) return {}; // Return empty array if no data for the level

    const aspectData = levelData.find((a: any) => Object.keys(a).includes(aspect));
    return aspectData ? aspectData[aspect] : {};
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
            <IoArrowBack
              style={{
                width: "80px",
                border: "none",
                height: "40px",
                cursor: "pointer",
              }}
            />
          </button>
          <AspectSelector onChange={handleAspectChange} level={level} />
        </div>
      )}

      {aspect && !unit && (
        <div className="unitselector">
          <button onClick={goBackToAspect} className="btn-back">
            <IoArrowBack
              style={{
                width: "80px",
                border: "none",
                height: "40px",
                cursor: "pointer",
              }}
            />
          </button>
          <UnitSelector
            aspect={aspect}
            data={getAudiosForAspect()}
            onChange={handleUnitChange}
            level={level}
          />
        </div>
      )}

      {aspect && unit && (
        <div className="audiolist">
          <button onClick={goBackToUnit} className="btn-back">
            <IoArrowBack
              style={{
                width: "80px",
                border: "none",
                height: "40px",
                cursor: "pointer",
              }}
            />
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
