import React from "react";
import "../styles/Cons.css";
import ConsonantRender from "../components/consComp/ConsonantRender";
import { consDict } from "../components/consDict.tsx";

const Cons: React.FC = () => {
  return (
    <div className="bg">
      {consDict.map((consonant, index) => (
        <div className="card" key={index}>
          <ConsonantRender
            letters={consonant.letters}
            consonant={consonant.sound}
            file={consonant.file}
            example={consonant.example}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Cons;
