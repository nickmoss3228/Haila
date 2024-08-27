import React from 'react'
import '../styles/Cons.css'
import ConsonantRender from '../components/consComp/ConsonantRender'

const Cons = () => {
    const consDict = [
        {sound:"p", file:"p", example: "Peter picked a peck of pickled peppers.", letters:"p, P"}, 
        {sound:"b", file:"b", example: "The baby played with a blue ball.", letters:"b, B"}, 
        {sound:"k", file:"k", example: "Kevin kicked the ball over the fence.", letters:"k, K"}, 
        {sound:"g", file:"g", example: "Greg gave Gary a gift for his birthday.", letters:"g, G"}, 
        {sound:"f", file:"f", example: "Frank fried fish for dinner.", letters:"f, F"}, 
        {sound:"v", file:"v", example: "Victor visited the vast vineyard.", letters:"v, V"}, 
        {sound:"t", file:"t", example: "Tom takes the trash out every morning.", letters:"t, T"}, 
        {sound:"d", file:"d", example: "The dog dug a deep hole in the yard.", letters:"d, D"},
        {sound:"s", file:"s", example: "Sally sings the song so well.", letters:"s, S"},  
        {sound:"z", file:"z", example: "The zoo had a new zookeeper this year.", letters:"z, Z"}, 
        {sound:"ʃ", file:"ʃ", example: "She sells sea shells on a shore.", letters:"h"}, 
        {sound:"ʒ", file:"ʒ", example: "She wore a beige dress.", letters:"g"}, 
        {sound:"θ", file:"θ", example: "Three people think quick.", letters:"th, Th"}, 
        {sound:"ð", file:"ð", example: "The weather is very warm.", letters:"th, Th"},
        {sound:"tʃ", file:"tʃ", example:"Chester Cheetah chooses a chunk of cheap cheddar cheese.", letters:"ch, Ch"}, 
        {sound:"dʒ", file:"dʒ", example: "Jane jumped joyfully on the trampoline.", letters:"j, J"}, 
        {sound:"l", file:"l", example: "Larry loves to laugh.", letters:"l, L"}, 
        {sound:"r", file:"r", example: "Robert ran a race around the river park.", letters:"r, R"}, 
        {sound:"w", file:"w", example: "William worked hard to win the award.", letters:"w, W"}, 
        {sound:"j", file:"j", example: "The young yogi practiced yoga all morning.", letters:"y, Y"}, 
        {sound:"m", file:"m", example: "Mary made magnificent music with her mandolin.", letters:"m, M"}, 
        {sound:"n", file:"n", example: "Nancy noticed the new necklace in the window.", letters:"n, N"}, 
        {sound:"ŋ", file:"ŋ", example: "The king's song was long.", letters:"ng"}, 
        {sound:"h", file:"h", example: "Harry is a hairdresser.", letters:"h, H"},  
    ];
  return (
    <div className="bg">
        {consDict.map((consonant, index) => (
            <div className='card'>
                <ConsonantRender letters={consonant.letters} consonant={consonant.sound} file={consonant.file} example={consonant.example} index={index}/>
            </div>
        ) )}
        {/* <div className="card">
            <div className="sound">/p/</div>
            <div className='combinations'> p: pilot, Poland <br/> 
            pp: apple, happy <br/>  
            </div>
            <div className="example">She has bl
                <span className="accent">u</span>
            e sh
            <span className="accent">oe</span>
            s.
            </div>
        </div> */}
    </div>
  )
}

export default Cons 


{/* <div className="consSounds">
        <tr>
            <td className='leftCorner'>Consonant Sounds</td>
            <td className='noBorder'>Examples</td>
            <td className='rightCorner'>Exceptions</td>
        </tr>
        <tr>
            <td>/p/</td>
            <td>
                p: pilot, Poland <br/> 
                pp: apple, happy <br/> 
            </td>
            <td>-</td>
        </tr>
        
        <tr>
            <td>/b/</td>
            <td>
                b: be, table <br/> 
                bb: hobby <br/> 
            </td>
            <td>-</td>
        </tr>
        
        <tr>
            <td>/k/</td>
            <td>c: actor <br/> 
                k: kitchen <br/> 
                ck: black <br/> 
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/g/</td>
            <td>
                g: green, get <br />
                gg: eggs <br />
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/f/</td>
            <td>
                f: Friday, wife <br />
                ph: photo, alphabet <br />
                ff: office, coffee <br />
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/v/</td>
            <td>
                v: very, eleven<br/>
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/t/</td>
            <td>
                t: tea, take <br/>
                tt: letter, bottle <br/>
            </td>
            <td>liked, dressed</td>
        </tr>
        <tr>
            <td>/d/</td>
            <td>
                s: sister, stops <br/>
                ss: stress, actress <br/>
                ce/ci: centre, nice, city <br/>
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/z/</td>
            <td>
                z: zero, zebra <br/>  
                s, se: music, please, dogs <br/> 
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/ʃ/</td>
            <td>
                sh: shopping, shoes <br/>
                ti + vowel: station <br/>
            </td>
            <td>sugar, sure</td>
        </tr>
        <tr>
            <td>/ʒ/</td>
            <td>
                si + on: revision, decision</td>
            <td>
                usually,garage
            </td>
        </tr>
    </div>

    <div className="consSounds2">
        <tr>
            <td className='leftCorner'>Consonant Sounds</td>
            <td className='noBorder'>Examples</td>
            <td className='rightCorner'>Exceptions</td>
        </tr>

        <tr>
            <td>/θ/</td>
            <td>
                th: think, thirty<br/> 
            </td>

            <td>-</td>
        </tr>
        
        <tr>
            <td>/ð/</td>
            <td>
                th: the, these, then, that, other <br/>
            </td>
            <td>-</td>
        </tr>

        <tr>
            <td>/tʃ/</td>
            <td>
                ch: cheap, children <br/>
                tch: watch, match <br/>
                t(+ure): picture <br/>
            </td>
            <td></td>
        </tr>

        <tr>
            <td>/dʒ/</td>
            <td>
                j: January, jacket, July <br/>
                dge: bridge, fridge <br/>
            </td>
            <td>-</td>
        </tr>

        <tr>
            <td>/l/</td>
            <td>
                l, le: like, little <br/>
                ll: small <br/>
            </td>
            <td>-</td>
        </tr>

        <tr>
            <td>/r/</td>
            <td>
                r: rice, rich <br/>
                rr: sorry <br/>
            </td>
            <td>write, wrong</td>
        </tr>
        
        <tr>
            <td>/w/</td>
            <td>
                w: window, wait <br/>
                wh: why, when <br/>
            </td>
            <td>one, once</td>
        </tr>
        <tr>
            <td>/j/</td>
            <td>
                y: yellow, yesterday <br/>
                before u: use, university, music <br/>
            </td> 
            <td>-</td>
        </tr>

        <tr>
            <td>/m/</td>
            <td>
                m: man, Monday <br/>
                mm: summer <br/>
            </td>
            <td >-</td>
        </tr>

        <tr>
            <td>/n/</td>
            <td>
                n: no, never <br/>
                nn: dinner <br/>
            </td>
            <td >-</td>
        </tr>
        <tr>
            <td>/ŋ/</td>
            <td>ng: England, song, thing</td>
            <td>think, bank</td>
        </tr>
        <tr>
            <td>/h/</td>
            <td>h: happy, hungry, hotel</td>
            <td>who, whose</td>
        </tr>
    </div> */}