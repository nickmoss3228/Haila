import React from 'react'
import VowelRender from './vowelRender'

const VowelSub = () => {
    const vowelDict = ["/u:/", "/u/", "/ᴈ:/", "/ə/", "/ɒ/", "/ou/", "/i/", "/i:/", "/a:/", "/ʌ/", "/æ/", "/ɛ/", "/ei/", "/ai/"]
    const examples = ["She has blue shoes.", "The cook took a look at the book.", "She studies German at university.", "a teacher, a computer", "The frog hops on the log.", "We go home.", "The fish swims in the dish.", "We see a tree.", "A car park is far from here.", "Mom loves the mug.", "The man has a black hat.", "Ben met a vet in the end.", "The train came late to the station.", "The kite flies high."]
  return (
    <div className='vowelSub'>
        {vowelDict.map((sound, index) =>(<VowelRender sound={sound} index={index}/>))}
    </div>
  )
}

export default VowelSub