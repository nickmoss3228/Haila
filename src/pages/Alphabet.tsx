import Letter from '../components/letter'

const Alphabet = () => {
    const alphabet = [["Aa", "Bb", "Cc", "Dd"], ["Ee", "Ff", "Gg"], ["Hh", "Ii", "Jj", "Kk"], ["Ll", "Mm", "Nn", "Oo" ,"Pp"], ["Qq", "Rr", "Ss"], ["Tt", "Uu", "Vv", "Ww"], ["Xx", "Yy", "Zz"]]
    
  return (  
    <>
        <div className='menu'>
{/* 
            <Link to={"Vowels"} className='link'> 
              <div className="vowels">Vowels</div>
            </Link> */}

            <div className="menubar">The English Alphabet</div>  
{/* 
            <Link to={"Cons"} className='link'>
              <div className="cons">Consonants</div>
            </Link> */}
            
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

// {alphabet.map((letter, index) => {
//   return <Letter 
//     letter={letter} 
//     key={index}
//     />
// })}


    // const abc = ["Aa", "Bb", "Cc", "Dd"]
    // const defg = ["Ee", "Ff", "Gg"];

    // const hijk = ["Hh", "Ii", "Jj", "Kk",] 
    // const lmnop = ["Ll", "Mm", "Nn", "Oo" ,"Pp"]

    // const qrs = ["Qq", "Rr", "Ss"]
    // const tuvw = ["Tt", "Uu", "Vv", "Ww"]

    // const xyz = ["Xx", "Yy", "Zz"]