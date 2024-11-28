import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/List.css'

const List = () => {
  return (
    <div className='list'>
        <h1 className="choose">
            Choose the app you need:
        </h1>

        <div className="gridlist">

            <div className="listgriditem">
                <Link to="./sounds">
                    <div className="item-alphabet">Sounds</div>
                    <div className="hidden-content">Alphabet, vowels and consonants.</div>
                </Link>  
            </div>

            <div className="listgriditem">
                <Link to="irregulars">
                    <div className="item-irregulars">Irregular Verbs</div> 
                    <div className="hidden-content">3 forms of the Irregular verbs.</div>
                </Link>
            </div>
            
            <div className="listgriditem">
                <Link to="tenses">
                    <div className="item-tenses">Tenses</div>
                    <div className="hidden-content">All English Tenses.</div>
                </Link>     
            </div>

            <div className="listgriditem">
                <Link to="gerundinfinitive">
                    <div className="item-ger-inf">Gerund / Infinitive</div> 
                    <div className="hidden-content">A table for verbs.</div>
                </Link>
            </div>

            <div className="listgriditem">
                <Link to="phrasals">
                    <div className="item-phrasals">Phrasal Verbs</div> 
                    <div className="hidden-content">Web for verbs.</div>
                </Link>
            </div>

            <div className="listgriditem">
                <Link to="player">
                    <div className="item-player">The Player</div> 
                    <div className="hidden-content">Practise your listening skills. </div>
                </Link>
            </div>
{/* 
            <div className="listgriditem">
                <Link to="audiolevels">
                    <div className="item-1">The Audio List</div> 
                    <div className="hidden-content">dev</div>   
                </Link>
            </div> */}

        </div>
    </div>
  )
}

export default List

{/*             
            <div className="listgriditem">
            <Link to="Levels">
                <div className="item-audio"> Audio Files </div>
                <div className="hidden-content">Audios from the English File.</div>
            </Link>
            </div> */}

            {/* <div className="listgriditem">
                <Link to="cons">
                    <div className="item-cons">Consonants</div> 
                    <div className="hidden-content">All consonant sounds.</div>
                </Link>
            </div> */}

            {/* <div className="sticker-pos1">
            <img src={Himan} alt="sticker" />
        </div>
        <div className="sticker-pos2">
            <img src={Fish} alt="sticker" />
        </div>
        <div className="sticker-pos3">
            <img src={Peace} alt="sticker" />
        </div> */}

        {/* 
            <div className="listgriditem">
                <Link to="repetition">
                    <div className="item-ger-inf">Audio Player</div> 
                    <div className="hidden-content">Revolutionary way to practice listening.</div>
                </Link>
            </div> */}

            {/* 
            <div className="listgriditem">
                <Link to="vowels">
                    <div className="item-vowels">Vowels</div>
                    <div className="hidden-content">Vowel sounds.</div>
                </Link>                
            </div> */}