import { useState } from "react";
import styles from "../styles/GerundInfintives.module.css";
import { gerundInfTable } from "../components/GerInfObject";
import GerundInfinitivesModal from "../components/GerundInfinitivesModal";

type VerbItem = {
  verb: string;
  gerund?: string[];
  infinitive?: string[];
  examples?: string[];
}

type CategoryData = {
  description: string;
  verbs: VerbItem[];
}

// type SelectedContent = {
//   category?: string;
//   description?: string;
//   verb?: string;
//   gerund?: string[];
//   infinitive?: string[];
//   examples?: string[];
//   categoryDescription?: string;
// }

const GerundInfinitive = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>({});
  const [contentType, setContentType] = useState("");

  const handleClick = (
    content: VerbItem | { category: string; description: string},
    type: "category" | "verb",
    categoryDescription: string = ""
      ) => {
    setSelectedContent({ ...content, categoryDescription });
    setContentType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.gerundInfinitive}>
      <div className={styles.gridContainerGerund}>
        {Object.entries(gerundInfTable as Record<string, CategoryData>).map(
          ([category, { description, verbs }]) => (
            <div className={styles.gridItemGerund} key={category}>
              <h3
                className={styles.categoryHeader}
                onClick={() =>
                  handleClick({ category, description }, "category")
                }
              >
                {category}
              </h3>
              {verbs.map((verb, index) => (
                <div
                  key={index}
                  className={styles.verbItem}
                  onClick={() => handleClick(verb, "verb", description)}
                >
                  {verb.verb}
                </div>
              ))}
            </div>
          )
        )}
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
