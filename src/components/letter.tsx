import React from 'react'
import Lettersub from './Lettersub'

const Letter = ({group, index}) => {
  return (
    <>
      <div key={index} className='group'>
          {group.map((letter, letterIndex) => (
            <Lettersub letter={letter} letterIndex={letterIndex}/>
          ))}
      </div>
    </>
  )     
}

export default Letter