import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Sidebar = () => {

  const [extended,setExtended]=useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} =useContext(Context)
   
  const loadPrompt =async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">


      <div className="pointer" onClick={()=>setExtended(prev=>!prev)}>
        <img  className='menu' src={assets.menu_icon} alt="menu_icon" />
        </div>


        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="new-chat" />
            {extended?<p className="animation">New Chat</p>:null}
        </div>
        {extended?<div className="recent animation">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="message-icon" />
                <p>{item.slice(0,18)}</p>
            </div>
              )
            })}
            
        </div>:null}
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question-icon" />
          {extended?<p className="animation">Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history-icon" />
          {extended?<p className="animation">Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting-icon" />
          {extended?<p className="animation" >Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
