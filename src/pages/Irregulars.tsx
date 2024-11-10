import React, {useEffect, useState} from 'react'
import { verbList } from '../components/verbsList'
import "../styles/Irregulars.css"
import IrregularRender from '../components/irregularComp/IrregularRender'

interface Verb {
    level: string;
    form1: string;
    form2: string;
    form3: string;
    file1: string;
    file2: string;
    file3: string;
}

type LevelStyles = {
    [key:string]: {
        backgroundColor: string;
        color: string;
    }
}

const Irregulars: React.FC = () => {
    const [selectedLevels, setSelectedLevels] = useState<string[]>([])
    console.log(selectedLevels) 
    const [filteredVerbs, setFilteredVerbs] = useState<Verb[]>(verbList);
    console.log(filteredVerbs)

    useEffect(() => {
        if (selectedLevels.length === 0) {
            setFilteredVerbs(verbList);
      } else {
        setFilteredVerbs(verbList.filter(verb => {
            const verbLevels = verb.level.split(', ');
            console.log(verbLevels)
            return selectedLevels.some(level => verbLevels.includes(level));
        }));
    }}, [selectedLevels]);

    const toggleLevel = (level: string) => {setSelectedLevels(prevLevels => 
        prevLevels.includes(level)
            ? prevLevels.filter(l => l !== level)
            : [...prevLevels, level]
        );
        console.log(level)
    };

    const getButtonStyle = (level:string): React.CSSProperties => {
        if (!selectedLevels.includes(level)) return {};
        const styles: LevelStyles = {
          Beginner: { backgroundColor: '#9f43ce', color: "white" },
          Elementary: { backgroundColor: '#eb1a1a', color: "white" },
          'Pre-Intermediate': { backgroundColor: '#5457f1', color: "white" },
          Intermediate: { backgroundColor: '#47d826', color: "white" }
        }
        return styles[level] || {};
      };

  return (
    <div className="backdrop">  
        <div className="menu">
            <div className='menubar'>
                Irregular Verbs        
            </div>
        </div>
  
    <div className="buttons">
        {['Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate'].map(level => (
            <button 
                key={level}
                className={`filterButton ${selectedLevels.includes(level) ? 'active' : ''}`}
                onClick={() => toggleLevel(level)}
                style={getButtonStyle(level)}
            >
                {level}
            </button>
        ))}
    </div>

    <div className="versions">
        <div className='groupPres'>Present</div>
        <div className='group'>Past</div>
        <div className='groupPerf'>Perfect</div>
    </div>

        <div className='verblist'>
            {filteredVerbs.map((verb, index) => (
                <IrregularRender 
                    key={index}
                    verb={verb}
                    index={index}
                    level={verb.level}
                />
            ))}
        </div>
    </div>
  )
}

export default Irregulars
