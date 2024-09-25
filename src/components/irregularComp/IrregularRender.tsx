import React from 'react'

const IrregularRender = ({verb, index, level}) => { 

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
      <div className='grid-item' onClick={playVerb1}>{verb.form1}</div> 
      <div className='grid-item' onClick={playVerb2}>{verb.form2}</div> 
      <div className='grid-item' onClick={playVerb3}>{verb.form3}</div>           
    </div> 
  )
}

export default IrregularRender