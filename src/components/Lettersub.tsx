import React from 'react'

interface LettersubProps {
  letter: string;
  letterIndex: number;
}

const Lettersub: React.FC<LettersubProps> = ({letter, letterIndex}) => {

    const playAudio = (): void => {
        const Sound = new Audio(`/alphabet/${letter}.mp3`)
        console.log(Sound)
        Sound.play()    
    }
  return (
    <div key={letterIndex} className='letters' onClick={playAudio}>{letter}</div>
  )
}

export default Lettersub