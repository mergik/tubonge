import React from 'react';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, emoji, index }) => {
    const {selectedConversation, setSelectedConversation} = useConversation()

    const isSelected = selectedConversation?._id === conversation._id
    //console.log(selectedConversation?._id)
  return (
    <>

    <div 
        className={`flex gap-2 items-center hover:bg-darkish rounded-2xl m-2 p-2 cursor-pointer 
        ${isSelected ? "bg-sky-500": ""} `} 
        onClick={() => setSelectedConversation(conversation)}>
        <div className="avatar online indicator">
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
                <p className='font-poppins font-thin text-xs text-light'> Lorem ipsum dolor sit amet kasd in... </p>
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