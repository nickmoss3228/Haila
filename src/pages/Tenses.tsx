import React, {useState} from 'react'
import "../styles/Tenses.css"
import { tensesInfo } from '../components/tensesinfo'
import Modal from '../components/Modal'

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

{/* <PastSimple openModal={openModal} showModal={showModal} closeModal={closeModal}/>
            
            <PresentSimple openModal={openModal} showModal={showModal} closeModal={closeModal}/> */}

            {/* <div className="grid-item" onClick={toggleModal}>
                
                <Modal show={showModal} onClose={closeModal}>
                    <h2>Modal Title</h2>
                    <p>1</p>
                </Modal>

                <img src='/tenses/pastSimple.png' alt='pastSimple'/>
                Past Simple

            </div>

            <div className="grid-item" onClick={toggleModal}>

                <Modal show={showModal} onClose={closeModal}>
                    <h2>Modal Title</h2>
                    <p>2</p>
                </Modal>

                <img src='/tenses/presentSimple.png'/>
                Present Simple
            </div> */}

            {/* <div className="grid-item">
                <img src='/tenses/futureSimple.png'/>
                Future Simple
            </div>

            <div className="grid-item">
                <img src='/tenses/pastContinuous.png'/>
                Past Continuous
            </div>

            <div className="grid-item">
                <img src='/tenses/presentContinuous.png'/>
                Present Continuous
            </div>

            <div className="grid-item">
                <img src='/tenses/futureCont.png'/>
                Future Continuous
            </div>

            <div className="grid-item">
                <img src='/tenses/pastPerfect.png'/>
                Past Perfect
            </div>

            <div className="grid-item">
                <img src='/tenses/presentPerfect.png'/>
                Present Perfect
            </div>

            <div className="grid-item">
                <img src='/tenses/futurePerfect.png'/>
                Future Perfect
            </div>

            <div className="grid-item">
                <img src='/tenses/pastPerfectCont.png'/>
                Past Perfect Continuous
            </div>

            <div className="grid-item">
                <img src='/tenses/presentPerfectCont.png'/>
                Present Perfect Continuous
            </div>

            <div className="grid-item">
                <img src='/tenses/futurePerfectCont.png'/>
                Future Perfect Continuous
            </div> */}