import React from 'react'

interface IrregularRenderProps {
  verb: Verb;
  index: number;
  level: string;
}

const IrregularRender: React.FC<IrregularRenderProps> = ({verb, index})=> { 

const playVerb1 = () => {
  const verbSound = new Audio(`/irregulars/${verb.file1}.mp3`)
  console.log(verbSound)
  verbSound.play()    
}
const playVerb2 = () => {
  const verbSound = new Audio(`/irregulars/${verb.file2}.mp3`)
  console.log(verbSound)
  verbSound.play() 
}
const playVerb3 = () => {
  const verbSound = new Audio(`/irregulars/${verb.file3}.mp3`)
  console.log(verbSound)
  verbSound.play() 
}

  return (
    <div className="grid-container-irregular" key={index}> 
      <div className='grid-item' onClick={playVerb1}>
         <span className="verb-text">{verb.form1}</span>
      </div> 
      <div className='grid-item' onClick={playVerb2}>
        <span className="verb-text">{verb.form2}</span>
      </div> 
      <div className='grid-item' onClick={playVerb3}>
        <span className="verb-text">{verb.form3}</span>
      </div>           
    </div> 
  )
}

export default IrregularRender