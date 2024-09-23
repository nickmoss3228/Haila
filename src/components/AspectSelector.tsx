import React from 'react';

const AspectSelector = ({onChange, level}) => {
  const aspects = ['Listening', 'Vocabulary', 'Video Listening','Revise And Check', 'Practical English'];

  const getAspectsClass = (level) => {
    switch(level) {
      case "Listening":
        return "listening-aspect";
      case "Vocabulary":
        return "vocabulary-aspect";
      case 'Video Listening':
        return "videolistening-aspect"
      case 'Revise And Check': 
        return "rac-aspect"
      case "Practical English":
        return "practical-aspect"
    }
  }

  return (
    <div className='aspect-wrapper'>
      <h1 className='header-levels'>Select the aspect of {level}:</h1>
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