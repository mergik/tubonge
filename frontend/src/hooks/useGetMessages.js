import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const {messages, setMessages, selectedConversation} = useConversation()

  useEffect(() => {
    const getMessages = async() => {
        setLoading(true)
        try{
            const res = await fetch(`/api/message/${selectedConversation._id}`)
            const data = await res.json()

            if(data.error) throw new Error(data.error)
            setMessages(data)

        }catch(error){
          toast.error('Problem getting your messages, please refresh');
          // toast.error(error.message) verbose for dev only
        }finally{
            setLoading(false)
        }
    }

    if(selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])

  return {messages, loading}
}

export default useGetMessages