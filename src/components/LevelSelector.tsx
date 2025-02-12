import React from 'react'

const LevelSelector = ({onChange}) => {
    const levels = ['Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate'];

    const getLevelClass = (level) => {
      switch(level) {
          case 'Beginner':
              return 'beginner-level';
          case 'Elementary':
              return 'elementary-level';
          case 'Pre-Intermediate':
              return 'pre-intermediate-level';
          case 'Intermediate':
              return 'intermediate-level';
          default:
              return '';
      }
  };

    return (
      <div className='level-container'>
        <button className='blank'></button>
        <h1 className='header-levels'>Select the Level:</h1>
        {levels.map(level => (
          <button 
            key={level} 
            onClick={() => onChange(level)} 
            className={`btn-choose ${getLevelClass(level)}`}
          >
            <div className='hidden-content-levels'>
              <div className="lvlname"> {level}</div> 
            </div>
          </button>
        ))}
      </div>
    );
}

export default LevelSelector