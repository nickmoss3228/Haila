import React from "react";
import { Link } from "react-router-dom";
import "../styles/List.css";

const List = () => {
  return (
    <div className="list">
      <h1 className="choose">Choose the app you need:</h1>

      <div className="gridlist">
        <div className="listgriditem">
          <Link to="Levels">
            <div className="item-audio"> Audio Files </div>
            <div className="hidden-content">Audios from the English File.</div>
          </Link>
        </div>

        <div className="listgriditem">
          <Link to="./sounds">
            <div className="item-alphabet">Sounds</div>
            <div className="hidden-content">
              Alphabet, vowels and consonants.
            </div>
          </Link>
        </div>

        <div className="listgriditem">
          <Link to="irregulars">
            <div className="item-irregulars">Irregular Verbs</div>
            <div className="hidden-content">
              3 forms of the Irregular verbs.
            </div>
          </Link>
        </div>

        <div className="listgriditem">
          <Link to="tenses">
            <div className="item-tenses">Tenses</div>
            <div className="hidden-content">All English Tenses.</div>
          </Link>
        </div>

        <div className="listgriditem">
          <Link to="gerundinfinitive">
            <div className="item-ger-inf">Gerund / Infinitive</div>
            <div className="hidden-content">A table for verbs.</div>
          </Link>
        </div>

        <div className="listgriditem">
          <Link to="phrasals">
            <div className="item-phrasals">Phrasal Verbs</div>
            <div className="hidden-content">Web for verbs.</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default List;
