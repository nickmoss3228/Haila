import React from "react";
import type { LevelSelectorProps } from "../components/types";

const LevelSelector: React.FC<LevelSelectorProps> = ({ onChange }) => {
  const levels = [
    "Beginner",
    "Elementary",
    "Pre-Intermediate",
    "Intermediate",
    "Intermediate Plus",
    "Upper-Intermediate",
    "Advanced"
  ];

  const getLevelClass = (level: string) => {
    switch (level) {
      case "Beginner":
        return "beginner-level";
      case "Elementary":
        return "elementary-level";
      case "Pre-Intermediate":
        return "pre-intermediate-level";
      case "Intermediate":
        return "intermediate-level";
      case "Intermediate Plus":
        return "intermediate-plus-level";
      case "Upper-Intermediate":
        return "upper-intermediate-level";
      case "Advanced":
        return "advanced-level";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="level-selector-container">
          <div className="level-header">
        <h1 className="header">Select the Level:</h1>
        </div>
        
      <div className="level-choices">
         {levels.map((level: any) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            className={`btn-choose ${getLevelClass(level)}`}
          >
            <div className="hidden-content-levels">
              <div className="lvlname"> {level}</div>
            </div>
          </button>
        ))}
        </div>
      </div>
    </>
    );
};

export default LevelSelector;
