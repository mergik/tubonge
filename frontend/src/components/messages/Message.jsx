import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic
  const fullName = fromMe ? authUser.fullName: selectedConversation?.fullName
  const messageTimestamp = extractTime(message.createdAt)
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ''

  return (
    <div className={`chat ${chatClassName} font-poppins`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-xl'>
                <img src={profilePic} alt='user avatar'/>
            </div>
        </div>
        <div className="chat-header">
            {/* Jane Doe
            <time className="text-xs opacity-50 pl-1">{message.createdAt}</time> */}
        </div>
        <div className={`chat-bubble text-light ${bubbleBgColor}`}>{message.message}</div>
        <time className="text-xs opacity-50 pl-1">{messageTimestamp}</time>
    </div>
  )
}

export default Message;