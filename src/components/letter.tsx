import React from "react";
import Lettersub from "./Lettersub";

interface LetterProps {
  group: string[];
  index: number;
}

const Letter: React.FC<LetterProps> = ({ group, index }) => {
  return (
    <>
      <div key={index} className="group">
        {group.map((letter: string, letterIndex: number) => (
          <Lettersub
            letter={letter}
            letterIndex={letterIndex}
            key={letterIndex}
          />
        ))}
      </div>
    </>
  );
};

export default Letter;
