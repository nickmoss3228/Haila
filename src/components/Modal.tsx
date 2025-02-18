import React from "react";
import "../styles/Modal.css";

interface TenseData {
  name: string;
  useCase: string;
  img: string;
  grammar: string;
  sentencesPos: string;
  sentencesNeg: string;
  sentencesQuest: string;
  expressions: string;
}

interface ModalProps {
  tense: TenseData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ tense, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="upper">
          <button className="close-button" onClick={onClose}>
            X
          </button>

          <div className="modal-name">{tense.name}</div>

          <div className="useCase">{tense.useCase}</div>
        </div>

        <img src={tense.img} alt="" className="tenseimg" />

        <div className="grammar">{tense.grammar}</div>

        <div className="info-container">
          <div className="examples">
            {tense.sentencesPos}
            <br />
            {tense.sentencesNeg}
            <br />
            {tense.sentencesQuest}
            <br />
          </div>

          <div className="expressions">{tense.expressions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
