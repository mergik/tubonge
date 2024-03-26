import React from 'react';

const Message = () => {
  return (
    <div className='chat chat-end font-poppins'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-xl'>
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' alt='user avatar'/>
            </div>
        </div>
        <div className="chat-header">
            Jane Doe
            <time className="text-xs opacity-50 pl-1">12:46</time>
        </div>
        <div className="chat-bubble text-light">I hate you!</div>
    </div>
  )
}

export default Message;