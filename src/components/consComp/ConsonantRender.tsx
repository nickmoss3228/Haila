import React from 'react'

interface ConsonantRenderProps {
  letters: string;
  consonant: string;
  file: string;
  example: string;
  index: number;
}

const ConsonantRender: React.FC<ConsonantRenderProps>  = ({consonant, file, example, index, letters}) => {
    const playCons = () => {
        const vowelSound = new Audio(`/consonants/${file}.mp3`)
        console.log(vowelSound)
        vowelSound.play()    
    }

    const renderColorCons = (text:string) => {
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
        <div className="sound" key={index} onClick={() => playCons()}>
            /{consonant}/
        </div>
        <div className="example">
            {renderColorCons(example)}
        </div>
    </>
  )
}

export default ConsonantRender