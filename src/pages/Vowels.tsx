import React from 'react'
import "../styles/Vowels.css"
import VowelRender from '../components/vowelsComp/VowelRender.tsx'

const Vowels = () => {  
    const vowelDict = [{sound:"u:", file:"u_long", example:"She likes blue shoes.", letters:"u, o"}, {sound:"u", file:"u", example: "The cook took a look at the book.", letters:"oo"}, {sound:"ᴈ:", file:"ᴈ_long", example: "I study German at university.", letters:"er"}, {sound:"ə", file:"ə", example: "a painter, a computer", letters:"er"}, {sound:"ɒ", file:"ɒ", example: "The frog hops on the log.", letters: "o"}, {sound:"ou", file:"ou", example: "We go home.", letters: "o"}, {sound:"i", file:"i", example: "The fish swims in the dish.", letters:"i, I"}, {sound:"i:", file:"i_long", example: "I see a tree.", letters: "e"}, {sound:"a:", file:"a_long", example: "A car park is not far.", letters: "ar"}, {sound:"ʌ", file:"ʌ", example: "Mom loves the mug.", letters: "o, u"}, {sound:"æ", file:"æ", example: "The man has a black hat.", letters: "a"}, {sound:"ɛ", file:"ɛ", example: "Ben met a vet in the end.", letters: "e"}, {sound:"ei", file:"ei", example: "The train came late.", letters:"ai, a"},  {sound:"ai", file:"ai", example: "The kite flies high.", letters: "i"}]
    return (                                    
    <div className="bg">
        {vowelDict.map((vowel, index) => (
            <div className="card">
                <VowelRender 
                    letters={vowel.letters} 
                    sound={vowel.sound} 
                    index={index} 
                    file={vowel.file} 
                    example={vowel.example}
                />
            </div>
        ))} 
    </div>
  )
}

export default Vowels

{/* <div className='tables'> 
        <div className="vowelSounds">
        <tr>
            <td className='leftCorner'>Vowel Sounds</td>
            <td className='noBorder'>Examples</td>
            <td className='rightCorner'>Exceptions</td>
        </tr>
        <tr>
            <td>/i/</td>
            <td>i : his, film, six</td>
            <td>English, women</td>
        </tr>
        
        <tr>
            <td>/i:/</td>
            <td>
                ee: meet <br/> 
                ea: speak <br/>
                e: me, we <br/>
            </td>
            <td>people,police,key</td>
        </tr>
        <tr>
            <td>/æ/</td>
            <td>a: thanks, flat</td>
            <td>-</td>
        </tr>
        <tr>
            <td>/a:/</td>
            <td>
                ar : party <br/>
                a : father <br/>
            </td>
            <td>aunt</td>
        </tr>
        <tr>
            <td>/o/</td>
            <td>o: hot, stop</td>
            <td>what, watch, want</td>
        </tr>
        <tr>
            <td>/o:/</td>
            <td>
                or: sport, door <br/>
                al: talk, small <br/>
                aw: saw, draw <br/>
            </td>
            <td>water, four, bought, thought</td>
        </tr>
        <tr>
            <td>/u/</td>
            <td>
                u: full, put <br/>
                oo: good, look <br/>
            </td>
            <td>could, would</td>
        </tr>
        <tr>
            <td>/u:/</td>
            <td>
                oo: school, food <br/>
                u: June, blue <br/>
                ew: new <br/>
            </td>
            <td>do, fruit, juice, shoe</td>
        </tr>
        <tr>
            <td>/ə/</td>
            <td>unstressed positions <br/> teacher, America</td>
            <td>-</td>
        </tr>
        <tr>
            <td>/ᴈ:/</td>
            <td>er: her, verb <br/>
                ir: first, third <br/>
                ur: nurse, turn <br/>
            </td>
            <td>learn, work, world, word</td>
        </tr>
        <tr>
            <td>/e/</td>
            <td>e: yes, help</td>
            <td>friend, weather, breakfast, any, said</td>
        </tr>
        <tr>
            <td className='leftBottomCorner'>/ʌ/</td>
            <td>u: bus, lunch</td>
            <td className='rightBottomCorner'>come, brother, son, does, young</td>
        </tr>
    </div>

    <div className="diphthongs">
    <tr>
            <td className='leftCorner'>Diphthongs</td>
            <td className='noBorder'>Examples</td>
            <td className='rightCorner'>Exceptions</td>
        </tr>
        <tr>
            <td>/ei/</td>
            <td>a: name, make <br/>
                ai: rain, paint <br/>
                ay: play, day <br/>
            </td>
            <td>break, steak, great, eight, they, grey</td>
        </tr>
        
        <tr>
            <td>/əu/</td>
            <td>
                o: old, home <br/>
                oa: road, toast <br/>
            </td>
            <td>slow, low</td>
        </tr>
        <tr>
            <td>/ai/</td>
            <td>i: nine, twice <br/>
                y: my, why <br/>
                igh: night, high <br/>
            </td>
            <td>buy</td>
        </tr>
        <tr>
            <td>/au/</td>
            <td>
                ou: out, thousand <br/>
                ow: how, down <br/>
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/oi/</td>
            <td>
                oi: coin, noise <br/>
                oy: enjoy <br/>
            </td>
            <td>-</td>
        </tr>
        <tr>
            <td>/iə/</td>
            <td>
                eer: beer, engineer <br/>
                ere: here, we’re <br/>
                ear: dear, near <br/>
            </td>
            <td>really, idea</td>
        </tr>
        <tr>
            <td>/eə/</td>
            <td>
                air: airport, stairs <br/>
                are: square, careful <br/>
            </td>
            <td>their, there, wear</td>
        </tr>
        <tr>
            <td>/uə/</td>
            <td>
                not common
            </td>
            <td></td>
        </tr>
        <tr>
            <td className='leftBottomCorner'>/i/</td>
            <td>happy, angry</td>
            <td className='rightBottomCorner'>-</td>
        </tr>
    </div>
</div> */}