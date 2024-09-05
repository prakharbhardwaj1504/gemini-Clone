import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">
        {!showResult?<>
          <div className="greet">
            <p><span>Greetings, project visitors!</span></p>
            <p>Give it a go and see for yourself...</p>
        </div>
        <div className="cards">
            <div className="card"><p>Suggestions for ice breaker ..</p>
            <img src={assets.compass_icon} alt="" /></div>
            <div className="card"><p>new ideas for startup  ..</p>
            <img src={assets.bulb_icon} alt="" /></div>
            <div className="card"><p>tell how to invite firends over dinner.</p>
            <img src={assets.message_icon} alt="" /></div>
            <div className="card"><p>what is docker</p>
            <img src={assets.code_icon} alt="" /></div>
        </div>

        </>
        :<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading? <div className="loader">
                <hr />
                <hr />
                <hr />
            </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            
          </div>
          </div>      
        }
        


        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter")onSent()}} type="text" placeholder="Enter a promt here" />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()}  src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini may show some bogus response
            </p>
            
        </div>
      </div>
    </div>
  );
};

export default Main;
