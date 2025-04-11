import { useState } from "react";
import "../styles/Tenses.css";
import { tensesInfo } from "../components/tensesinfo";
import Modal from "../components/Modal";

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

const Tenses = () => {
  const [currentTense, setCurrentTense] = useState<TenseData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(modalOpen);

  const openModal = (tense: any) => {
    setCurrentTense(tense);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentTense(null);
    setModalOpen(false);
  };

  return (
    <div className="backdrop">
      <div className="menu">
        <div className="menubartenses">English Tenses</div>
      </div>

      <div className="tenses-main">
        <div className="grid-container">
          {tensesInfo.map((tense, index) => {
            return (
              <div
                key={index}
                className="grid-item"
                onClick={() => openModal(tense)}
              >
                {tense.name}
                <img src={tense.img} alt="" className="image" />
              </div>
            );
          })}
          {modalOpen && currentTense && (
            <Modal tense={currentTense} onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tenses;
