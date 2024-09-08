import React from 'react'
import "../styles/Modal.css"

const Modal = ({tense, onClose}) => {


  return (
    <div className='modal-backdrop'>
        <div className="modal-content">

        <div className="upper">

            <button className="close-button" onClick={onClose}>
                X
            </button>
           
            <div className="modal-name">
                {tense.name}
            </div>
            
            <div className="useCase">
                {tense.useCase}
            </div>

        </div>
           
            
            <img src={tense.img} alt="" className="tenseimg">
                
            </img>
            
            <div className="grammar">
                {tense.grammar}
            </div>

            <div className="info-container">
                <div className="examples">
                    {tense.sentencesPos}
                    <br/>
                    {tense.sentencesNeg}
                    <br/>
                    {tense.sentencesQuest}  
                    <br/>
                </div>

                <div className="expressions">
                    {tense.expressions}
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Modal