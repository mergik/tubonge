import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const logout = async() => {
    setLoading(true)
    try{
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json()

        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("chat-user")
        setAuthUser(null)
        toast.success('Logged out!');

    }catch(error){
        toast.error('We encountered an issue while trying to log you out, please try again');
        // toast.error(error.message) verbose for dev only
    }finally{
        setLoading(false)
    }
  }

  return {loading, logout}
}

export default useLogout