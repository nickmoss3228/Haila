import React from "react"
import "../App.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (  
    <>
      <div className="background">

        <div className="homepage">
        <span>Study with ease
          <br/>
          with a new set of apps designed for you!
        </span>
        </div>

        <div className="enter">
          <button className="btn-enter">
            <Link to='/List'>Start</Link>
          </button>
        </div>

      </div>
    </>
  )
}

export default Home