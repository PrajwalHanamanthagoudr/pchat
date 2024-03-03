import React, { useContext } from "react";
import Video from '../img/video_call.png'
import Add from '../img/addAvatar.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
      <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat