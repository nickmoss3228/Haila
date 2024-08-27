import React from 'react'

const Lettersub = ({letter, letterIndex}) => {

    const playAudio = () => {
        const Sound = new Audio(`/alphabet/${letter}.mp3`)
        console.log(Sound)
        Sound.play()    
    }
  return (
    <div key={letterIndex} className='letters' onClick={playAudio}>{letter}</div>
  )
}

export default Lettersub