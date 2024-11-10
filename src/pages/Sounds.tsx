import React, { useState } from 'react';
import Alphabet from './Alphabet';
import Vowels from './Vowels';
import Cons from './Cons';
import "../styles/Sounds.css"

const Sounds = () => {
    const [activeComponent, setActiveComponent] = useState('alphabet');

    // Handlers for setting the active component
    const showAlphabet = () => setActiveComponent('alphabet');
    const showVowels = () => setActiveComponent('vowels');
    const showConsonants = () => setActiveComponent('consonants');

    return (
        <div className="sounds-buttons">
            <div className="button-container">
                <button onClick={showAlphabet}>Alphabet</button>
                <button onClick={showVowels}>Vowels</button>
                <button onClick={showConsonants}>Consonants</button>
            </div>
            
            <div className="component-container">
                {activeComponent === 'alphabet' && <Alphabet />}
                {activeComponent === 'vowels' && <Vowels />}
                {activeComponent === 'consonants' && <Cons />}
            </div>
        </div>
    );
};

export default Sounds