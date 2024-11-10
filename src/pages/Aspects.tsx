import React from 'react'
import "../styles/Aspects.css"
import { useParams, useNavigate } from 'react-router-dom';

const Aspects = () => {
    const { level } = useParams();
    const navigate = useNavigate();

    const handleAspectSelect = (aspect: string) => {
        navigate(`/units/${level}/${aspect}`);
    };

  return (
    <div className='aspects'>
        <h2>Select Aspect for {level}</h2>
            <button onClick={() => handleAspectSelect('Listening')}>Listening</button>
            <button onClick={() => handleAspectSelect('Vocabulary')}>Vocabulary</button>
            <button onClick={() => handleAspectSelect('Video Listening / Revise And Check')}>Video Listening / Revise And Check</button>
            <button onClick={() => handleAspectSelect('Practical English')}>Practical English</button>
    </div>
  ) 
}

export default Aspects