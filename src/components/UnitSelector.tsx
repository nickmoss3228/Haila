import React from "react";
import type { UnitSelectorProps, Level } from "../components/types";

const UnitSelector: React.FC<UnitSelectorProps> = ({
  aspect,
  data,
  onChange,
  level,
}) => {
  const getUnitColor = (unitNumber: number, level: Level) => {
    const colors = {
      Beginner: ["#701698", "#76b83a", "#f9372e", "#0aa4ae"],
      Elementary: ["#f04d45", "#00abc5", "#f8931b", "#6dc05c"],
      "Pre-Intermediate": ["#00abc5", "#f8931b", "#6dc05c", "#f04d45"],
      Intermediate: ["#6dc05c", "#f04d45", "#00abc5", "#f8931b"],
      "Intermediate Plus": ["#d2035b", "#00abc5", "#f8931b", "#6dc05c"],
      "Upper-Intermediate": ["#f8931b", "#6dc05c", "#f04d45", "#00abc5"],
      Advanced: ["#00abc5", "#f8931b", "#6dc05c", "#f04d45"]
    };

    if (!colors[level]) {
      return "Gray";
    }

    const colorScheme = colors[level];
    const colorIndex = (unitNumber - 1) % colorScheme.length;
    return colorScheme[colorIndex];
  };

  const units = Object.keys(data);

  return (
    <div className="unit-wrapper">
      <h1 className="header-levels">Select the Unit for {aspect}:</h1>
      <div className="unitgrid">
        {units.map((unit, index) => {
          const unitNumber = index + 1; // units are numbered starting from 1
          const backgroundColor = getUnitColor(unitNumber, level);

          return (
            <button
              key={unit}
              onClick={() => onChange(unit)}
              className="btn-choose-unit"
              style={{ backgroundColor }}
            >
              <div className="unitname"> {unit} </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UnitSelector;
