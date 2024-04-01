import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/useConversation'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const {messages, setMessages, selectedConversation} = useConversation()

  const sendMessage = async(message) => {
    setLoading(true)
    try {
        const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        })
        const data = await res.json()
        if(data.error) throw new Error(data.error)

        setMessages([...messages, data])
    }catch(error){
        toast.error('Problem getting your messages, please refresh');
        // toast.error(error.message) verbose for dev only
    }finally{
        setLoading(false)
    }
  }

  return {sendMessage, loading}
}

export default useSendMessage