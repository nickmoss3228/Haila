import React, {useState} from 'react'
import "../styles/Phrasals.css"
import PhrasalsModel from '../components/PhrasalsModel';
import { phrasalVerbs } from '../components/phrasalVerbsTable';

interface PhrasalVerbData {
  meaning: string;
  example: string;
}

const Phrasals:React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPreposition, setSelectedPreposition] = useState<string>('');
  const [selectedData, setSelectedData] = useState<PhrasalVerbData[] | null>(null);

  const handlePrepositionClick = (preposition: string, data: PhrasalVerbData[]): void => {
    setSelectedPreposition(preposition);
    setSelectedData(data);
    setModalOpen(true);
  };

  const handleCloseModal = (): void => {
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