import React, {useState} from 'react'
import "../styles/Phrasals.css"
import PhrasalsModel from '../components/PhrasalsModel';
import { phrasalVerbs } from '../components/phrasalVerbsTable';

const Phrasals = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPreposition, setSelectedPreposition] = useState('');
  const [selectedData, setSelectedData] = useState(null);

  const handlePrepositionClick = (preposition, data) => {
    setSelectedPreposition(preposition);
    setSelectedData(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='phrasals-background'>
      <div className="phrasalverbs">
        {Object.entries(phrasalVerbs).map(([preposition, data]) => (
          <div
            key={preposition}
            className='prepositions'
            onClick={() => handlePrepositionClick(preposition, data)}
          >
            {preposition}
          </div>
        ))}
      </div>

      <PhrasalsModel
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        preposition={selectedPreposition}
        data={selectedData}
      />
    </div>
  );
}

export default Phrasals