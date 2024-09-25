import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/List.css'
import Himan from "../assets/stickers/hi-pepe.png"
import Fish from "../assets/stickers/importantfish.png"
import Peace from "../assets/stickers/peace.png"

const List = () => {
  return (
    <div className='list'>
        <div className="sticker-pos1">
            <img src={Himan} alt="sticker" />
        </div>
        <div className="sticker-pos2">
            <img src={Fish} alt="sticker" />
        </div>
        <div className="sticker-pos3">
            <img src={Peace} alt="sticker" />
        </div>
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

            {/* <div className="listgriditem">
                <Link to="gerundinfinitive">
                    <div className="item-ger-inf">Gerund/Infinitive</div> 
                    <div className="hidden-content">Verbs that use Gerund/Infinitive form.</div>
                </Link>
            </div> */}

        </div>
    </div>
  )
}

export default List