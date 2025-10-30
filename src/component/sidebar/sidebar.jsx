import './sidebar.css'
import { assets } from '../../assets/assets';
import { useState } from 'react';

export const Sidebar = () => {

  const [openSidebar, setOpenSidebar]=useState(false)

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img src={assets.menu_icon} className='menu' 
        onClick={()=>{
          setOpenSidebar(prev=>!prev)
        }}
        alt="sidebar-logo" />
        {
          openSidebar ? 
          <div className='new-chat'>
          <img src={assets.plus_icon} alt="new-chat-icon"/>
          <p>New Chat</p>
        </div>
        : null
        }
        {
          openSidebar ? 
           <div className='recent-chats'>
          <p className='recent-title'>Recent</p>
          <div className='recent-item'>
            <img src={assets.message_icon} alt="chat-icon"/>
            <p>Hi there! How can I help you?</p>
          </div>
        </div> : null
        }
       
      </div>
       <div className='sidebar-bottom '>
        <div className='bottom-items recent-item'>
          <img src={assets.question_icon} alt="faq-icon"/>
         {
          openSidebar ? <p>Help</p>: null
         } 
        </div>
        <div className='bottom-items recent-item'>
          <img src={assets.history_icon} alt="history-icon"/>
          
          {
          openSidebar ? <p>Settings</p> : null
         }
        </div>
        <div className='bottom-items recent-item'>
          <img src={assets.setting_icon} alt="setting-icon"/>
          {
          openSidebar ?  <p>Activity</p> : null
         }
         
        </div>
      </div>
    </div>
  )
}

export default Sidebar;