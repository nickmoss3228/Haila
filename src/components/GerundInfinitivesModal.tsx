import React from 'react';
import styles from "../styles/GerundInfintives.module.css";

const GerundInfinitivesModal = ({ isOpen, onClose, content, contentType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
      <button onClick={onClose} className={styles.closeButton}></button>
        {contentType === 'category' ? (
          <>
            <h2>{content.category}</h2>
            <p>{content.description}</p>
          </>
        ) : (
          <>
            <h2 className={styles.details}>Verb Details</h2>
            <h3 className={styles.verbName}>{content.verb}</h3>
            <p className={styles.translation}><strong>Translation:</strong> {content.translation}</p>
            {content.example && <p className={styles.exampleVerb}><strong>Example:</strong> {content.example}</p>}
            {content.meaning1 && (
              <>
                <p className='meaning-gerinf'><strong>Meaning 1:</strong> {content.meaning1}</p>
                <p className='example-gerinf'><strong>Example 1:</strong> {content.example1}</p>
                <p className='meaning-gerinf'><strong>Meaning 2:</strong> {content.meaning2}</p>
                <p className='example-gerinf'><strong>Example 2:</strong> {content.example2}</p>
              </>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default GerundInfinitivesModal;