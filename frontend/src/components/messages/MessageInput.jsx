import React, { useRef, useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const{loading, sendMessage} = useSendMessage()
  const textareaRef = useRef(null);

  // Text area auto-resizer
  const handleResize = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <textarea
            ref={textareaRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="input input-bordered w-full max-h-32 text-light font-poppins bg-darkish pr-10 pt-3 resize-none overflow-hidden"
            onInput={handleResize}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-light '>
                {/* Send icon from hero icons */}
                { loading ? <div className='loading loading-spinner'></div> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>}
            </button>
        </div>

    </form>
  )
}

export default MessageInput;