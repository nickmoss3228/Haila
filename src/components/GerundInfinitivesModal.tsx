import styles from "../styles/GerundInfintives.module.css";

interface CategoryContent {
  category: string;
  description: string;
}

// types for verb content
interface VerbContent {
  verb: string;
  translation: string;
  example?: string;
  meaning1?: string;
  example1?: string;
  meaning2?: string;
  example2?: string;
}

// props for the modal component
interface GerundInfinitivesModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: CategoryContent | VerbContent;
  contentType: string;
}

const GerundInfinitivesModal: React.FC<GerundInfinitivesModalProps> = ({
  isOpen,
  onClose,
  content,
  contentType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}></button>
        {contentType === "category" ? (
          <>
            <h2>{(content as CategoryContent).category}</h2>
            <p>{(content as CategoryContent).description}</p>
          </>
        ) : (
          <>
            <h2 className={styles.details}>Verb Details</h2>
            <h3 className={styles.verbName}>{(content as VerbContent).verb}</h3>
            <p className={styles.translation}>
              <strong>Translation:</strong> {(content as VerbContent).translation}
            </p>
            {(content as VerbContent).example && (
              <p className={styles.exampleVerb}>
                <strong>Example:</strong> {(content as VerbContent).example}
              </p>
            )}
            {(content as VerbContent).meaning1 && (
              <>
                <p className="meaning-gerinf">
                  <strong>Meaning 1:</strong> {(content as VerbContent).meaning1}
                </p>
                <p className="example-gerinf">
                  <strong>Example 1:</strong> {(content as VerbContent).example1}
                </p>
                <p className="meaning-gerinf">
                  <strong>Meaning 2:</strong> {(content as VerbContent).meaning2}
                </p>
                <p className="example-gerinf">
                  <strong>Example 2:</strong> {(content as VerbContent).example2}
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GerundInfinitivesModal;
