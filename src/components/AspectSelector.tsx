import React from 'react';

const AspectSelector = ({onChange, level}) => {
  const aspects = ['Listening', 'Vocabulary', 'Video Listening/Revise And Check', 'Practical English'];

  const getAspectsClass = (level) => {
    switch(level) {
      case "Listening":
        return "listening-aspect";
      case "Vocabulary":
        return "vocabulary-aspect";
      case 'Video Listening/Revise And Check':
        return "videolistening-rac-aspect"
      case "Practical English":
        return "practical-aspect"
    }
  }

  return (
    <div>
      <h1>Select the aspect of {level}:</h1>
      {aspects.map(aspect => (
        <button 
          key={aspect} 
          onClick={() => onChange(aspect)} 
          className={`btn-choose ${getAspectsClass(aspect)}`}
        >
          <div className="aspname">
            {aspect}
          </div> 
        </button>
      ))}
    </div>
  );
}

export default AspectSelector;