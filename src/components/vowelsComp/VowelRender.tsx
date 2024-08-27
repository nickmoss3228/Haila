import React from 'react'

const VowelRender = ({sound, index, file, example, letters}) => {
    const playVowel = () => {
        const vowelSound = new Audio(`/vowels/${file}.mp3`)
        console.log(vowelSound)
        vowelSound.play()    
    }
    console.log(example)


    // renderColorVowels(example, neededVowels)
    const renderColorVowels = (text:string) => {
      return text.split('').map((char, index) => {
        if (letters.includes(char)) {
          return <span key={index} className='colored-vowel'>{char}</span>
        } else {
          return char;
        }
      });
    };

  return (
    <>
      <div className="sound" key={index} onClick={() => playVowel()}>
          /{sound}/
      </div>
      <div className="example">
          {renderColorVowels(example)}
      </div>
    </>
  )
}

export default VowelRender