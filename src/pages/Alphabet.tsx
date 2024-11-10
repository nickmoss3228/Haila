import Letter from '../components/letter'
import "../styles/Alphabet.css"

const Alphabet = () => {
    const alphabet = [["Aa", "Bb", "Cc", "Dd"], ["Ee", "Ff", "Gg"], ["Hh", "Ii", "Jj", "Kk"], ["Ll", "Mm", "Nn", "Oo" ,"Pp"], ["Qq", "Rr", "Ss"], ["Tt", "Uu", "Vv", "Ww"], ["Xx", "Yy", "Zz"]]
    
  return (  
    <>
      <div className='menu'>
          <div className="menubar">The English Alphabet</div>  
      </div>

      <div className="alphcont">
        <div className="alphabet">
          {alphabet.map((group, index) => (
              <Letter group={group} index={index}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Alphabet