import React, {useState} from 'react'
import "../styles/Tenses.css"
import { tensesInfo } from '../components/tensesinfo'
import Modal from '../components/Modal'
import Verbforms from "../assets/stickers/verbforms.png"

const Tenses = () => {
  const [currentTense, setCurrentTense] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(modalOpen)

  const openModal = (tense : any) => {
    setCurrentTense(tense);
    setModalOpen(true);
  };
    
  const closeModal = () => {
    setCurrentTense(null);
    setModalOpen(false);
  };

  return (
    <div className='backdrop'>

    <div className="menu">
        <div className='menubartenses'>
            English Tenses        
        </div>
    </div>
    <div className="sticker-tenses">
        <img src={Verbforms} alt="sticker" />
    </div>


    <div className='tenses-main'>
        <div className="grid-container">
            {tensesInfo.map((tense, index) => {
                return <div
                    key={index}
                    className='grid-item'
                    onClick={() => openModal(tense)}
                > 
                    {tense.name}
                    <img src={tense.img} alt="" className="image"/>
                    </div>
                })}
            {modalOpen && (
                <Modal tense={currentTense} onClose={closeModal} />
            )}
        </div>
    </div>
    </div>
  )
}

export default Tenses