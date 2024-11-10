import React from 'react'
import Lettersub from './Lettersub'

// First, let's define the interface for the props
interface LetterProps {
  group: string[]; // Assuming group is an array of strings
  index: number;
}

const Letter: React.FC<LetterProps> = ({group, index}) => {
  return (
    <>
      <div key={index} className='group'>
          {group.map((letter: string, letterIndex: number) => (
            <Lettersub letter={letter} letterIndex={letterIndex} key={letterIndex} />
          ))}
      </div>
    </>
  )     
}

export default Letter