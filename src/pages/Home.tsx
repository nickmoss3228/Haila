import React from "react"
import "../App.css"
import { Link } from "react-router-dom"
import Intro from "../assets/stickers/letsgetintroduced.png"
import Hello from "../assets/stickers/himan.png"
import Cucumber from "../assets/stickers/coocoomber.png"
import Heart from "../assets/stickers/heart.png"

const Home = () => {
  return (  
    <>
      <div className="background">
        <div className="sticker-normal">
          <img src={Intro} alt="sticker"/>
        </div>
        <div className="sticker-side">
          <img src={Hello} alt="sticker" />
        </div>
        <div className="sticker-side2">
          <img src={Cucumber} alt="sticker" />
        </div>
        <div className="sticker-side3"> 
          <img src={Heart} alt="sticker" />
        </div>
        <div className="homepage">
          <span>Study with ease
            <br/>
            with a new set of apps designed for you!
          </span>
        </div>
            <Link to='/List' className="btn-enter">
              <span>Start</span>
            </Link>
      </div>
    </>
  )
}

export default Home