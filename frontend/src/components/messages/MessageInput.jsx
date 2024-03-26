import React from 'react';

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" placeholder="Your message..." className="input input-bordered w-full text-light font-poppins bg-darkish" />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-light'>
                {/* Send icon from hero icons */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </div>

    </form>
  )
}

export default MessageInput;