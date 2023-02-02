import React, { useState } from 'react';
import './sideBar.css';
import { MdHome, MdSubscriptions, MdHistory, MdThumbUp, MdExitToApp, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md'

const SideBar = ({sideBar, handleSideBarToggle}) => {

  return (
    <nav className={sideBar ? "sidebar show_icon" : "sidebar"}>
      <li>
        <MdHome size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Home</span>
      </li> 
      <li>
        <MdSubscriptions size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Subscriptions</span>
      </li> 
      <li>
        <MdThumbUp size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Liked Videos</span>
      </li>
      
      <li>
        <MdHistory size={26}
          onClick={() => handleSideBarToggle()} />
        <span> History</span>
      </li>
      
      <li>
        <MdLibraryBooks size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Library</span>
      </li>
      
      <li>
        <MdSentimentDissatisfied size={26}
          onClick={() => handleSideBarToggle()} />
        <span> I don't know</span>
      </li>

      <hr />
      <li>
        <MdExitToApp size={26}
          onClick={() => handleSideBarToggle()} />
        <span> Log Out</span>
      </li>
      <hr />
    </nav>
  )
}

export default SideBar;