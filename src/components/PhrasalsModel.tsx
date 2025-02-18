import React, { useState, useEffect } from "react";
import { PhrasalsModelProps, SelectedExamples } from "../components/types";

const PhrasalsModel: React.FC<PhrasalsModelProps> = ({
  isOpen,
  onClose,
  preposition,
  data,
}) => {
  if (!isOpen || !data) return null;

  const [selectedExamples, setSelectedExamples] = useState<SelectedExamples>({
    meanings: ["Click on a verb below to see its meaning."],
    examples: ["Example sentence will appear here."],
    translations: ["Translation will appear here."],
  });

  const [activeVerb, setActiveVerb] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setSelectedExamples({
        meanings: ["Click on a verb below to see its meaning."],
        examples: ["Example sentence will appear here."],
        translations: ["Translation will appear here."],
      });
      setActiveVerb(null);
    }
  }, [isOpen, preposition]);

  const handleVerbClick = (verb: string): void => {
    const verbData = data[0].verbs.find((v) => v.verb === verb);
    if (verbData) {
      setSelectedExamples({
        meanings: verbData.meanings.map((m) => m.meaning),
        examples: verbData.meanings.map((m) => m.example),
        translations: verbData.meanings.map((m) => m.translation),
      });
      setActiveVerb(verb);
    }
  };

  const handleClose = (): void => {
    setSelectedExamples({
      meanings: ["Click on a verb below to see its meaning."],
      examples: ["Example sentence will appear here."],
      translations: ["Translation will appear here."],
    });
    setActiveVerb(null);
    onClose();
  };

  return (
    <div className="phrasals-modal-overlay">
      <div className="phrasals-modal-content">
        <span className="phrasals-close-button" onClick={handleClose}>
          &times;
        </span>
        <h3 className="preposition">{preposition}</h3>

        <div className="example-display">
          {selectedExamples.meanings.map((meaning, index) => (
            <div key={index} className="meaning-example-pair">
              <div className="selected-meaning">
                <strong>{meaning}</strong>
              </div>
              <div className="selected-sentence">
                <p>{selectedExamples.examples[index]}</p>
              </div>
              <div className="selected-translation">
                <p>{selectedExamples.translations[index]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="verb-list">
          {data[0].verbs.map((verbData) => (
            <div
              key={verbData.verb}
              className={`verb-button ${
                activeVerb === verbData.verb ? "active" : ""
              }`}
              onClick={() => handleVerbClick(verbData.verb)}
            >
              <span className="verb-text">{verbData.verb}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhrasalsModel;
