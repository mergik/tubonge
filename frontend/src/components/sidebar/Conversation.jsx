import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/socketContext';

const Conversation = ({ conversation }) => {
    const {messages, selectedConversation, setSelectedConversation} = useConversation()

    const isSelected = selectedConversation?._id === conversation._id
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>

    <div 
        className={`flex gap-2 items-center hover:bg-darkish rounded-2xl m-2 p-2 cursor-pointer 
        ${isSelected ? "bg-purpleish": ""} `} 
        onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar  indicator ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-2xl">
                <img src={conversation.profilePic} alt='user avatar'/>
            </div>
            {/* Typing & Message Indicators */}
            {/* <span className="indicator-item badge badge-primary">typing…</span>
            <span className="indicator-item badge badge-primary">5+</span>  */}
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex flex-col'>
                <p className='font-poppins font-semibold text-light'>{conversation.fullName}</p>
                <p className='font-poppins font-thin text-xs text-light'> {messages.message} </p>
            </div>
        </div>
        
        
        {/* <div className='indicator flex flex-col'>
                <span className="indicator-item badge badge-primary">5+</span>
                <span className="indicator-item badge badge-primary">typing…</span>
        </div> */}
    </div>
    <div>

    </div>

    </>
  )
}

export default Conversation;