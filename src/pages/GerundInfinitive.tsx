import React, { useState } from 'react';
import styles from "../styles/GerundInfintives.module.css";
import { gerundInfTable } from '../components/GerInfObject';
import GerundInfinitivesModal from '../components/GerundInfinitivesModal';;

const GerundInfinitive = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const [contentType, setContentType] = useState('');

  const handleClick = (content, type, categoryDescription = '') => {
    setSelectedContent({...content, categoryDescription});
    setContentType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.gerundInfinitive}>
      <div className={styles.gridContainerGerund}>
        {Object.entries(gerundInfTable).map(([category, { description, verbs }]) => (
          <div className={styles.gridItemGerund} key={category}>
            <h3 
              className={styles.categoryHeader} 
              onClick={() => handleClick({category, description}, 'category')}
            >
              {category}
            </h3>
            {verbs.map((verb, index) => (
              <div
                key={index}
                className={styles.verbItem}
                onClick={() => handleClick(verb, 'verb', description)}
              >
                {verb.verb}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <GerundInfinitivesModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        content={selectedContent}
        contentType={contentType}
      />
    </div>
  );
};

export default GerundInfinitive;