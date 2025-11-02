import React, { useContext } from 'react'
import './mainContainer.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

export const MainContainer = () => {

    const {input, 
    setInput,
    resultData,
    setRresultData,
    recentPrompt,
    setRecentPrompt,
    previousPrompts,
    setPreviousPrompts,
    setLoading,
    loading,
    showResult,
    setShowResult,
    onSent
}= useContext(Context)


  return (
    <div className='main-top'>
        <div className='navbar'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className='main-container'>
            {
                !showResult ? 
                <>
                      <div className='greet-container'>
                <p><span>Hello Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className='info-cards'>
                <div className='card'>
                    <p>Suggest beautiful places to see on an upcoming road trip. </p>
                    <img src={assets.compass_icon} alt=""/>
                </div>
                <div className='card'>
                    <p> Briefly summarize this concept: urban planning.  </p>
                    <img src={assets.bulb_icon} alt=""/>
                </div>
                <div className='card'>
                    <p>Brainstorm team bonding activities for our work retreat.  </p>
                    <img src={assets.message_icon} alt=""/>
                </div>
                <div className='card'>
                    <p> Improve the readability of the following code.  </p>
                    <img src={assets.code_icon} alt=""/>
                </div>

            </div>
                </>
                : 
                <>
                <div className='result'>
                    <div className='result-title'>
                        <img src={assets.user_icon} />
                        <p>{recentPrompt}</p>
                    </div>
                </div>
                <div>
                      <img src={assets.gemini_icon} />
                      <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                </div>
                </>
            }
          
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" name="" id="" placeholder='Enter a prompt here'
                        onChange={(e)=>{
                            console.log("Input", input)
                            setInput(e.target.value)}
                        }
                        value={input}
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" 
                            
                        />
                        <img src={assets.send_icon} alt="" 
                        onClick={()=>onSent(input)}/>
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>

        </div>
    </div>
    
  )
}

export default MainContainer