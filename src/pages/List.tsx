import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/List.css'

const List = () => {
  return (
    <div className='list'>
        <div className="gridlist">
            <div className="listgriditem">
                <Link to="./alphabet">
                    <div className="item-alphabet">Alphabet</div>
                    <div className="hidden-content">Alphabet for beginners.</div>
                </Link>  
            </div>
            
            <div className="listgriditem">
                <Link to="tenses">
                    <div className="item-tenses">Tenses</div>
                    <div className="hidden-content">English Tenses.</div>
                </Link>     
            </div>

            <div className="listgriditem">
                <Link to="vowels">
                    <div className="item-vowels">Vowels</div>
                    <div className="hidden-content">All vowel sounds.</div>
                </Link>
                                
            </div>

            <div className="listgriditem">
                <Link to="cons">
                    <div className="item-cons">Consonants</div> 
                    <div className="hidden-content">All consonant sounds.</div>
                </Link>
            </div>

            <div className="listgriditem">
                <Link to="Levels">
                    <div className="item-audio"> Audio Files </div>
                    <div className="hidden-content">Audios from English File.</div>
                </Link>
            </div>

            <div className="listgriditem">
                <Link to="irregulars">
                    <div className="item-irregulars">Irregular Verbs</div> 
                    <div className="hidden-content">3 forms of verbs.</div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default List