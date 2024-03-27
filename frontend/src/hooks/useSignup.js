import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async({ fullName, username, email, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, email, password, confirmPassword, gender })
        if(!success) return;

        setLoading(true)
        try{
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ fullName, username, email, password, confirmPassword, gender })
            })

            const data = await response.json()
            console.log(data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return { loading, signup }
}

export default useSignup

function handleInputErrors({ fullName, username, email, password, confirmPassword, gender }){
    if(!fullName || !username || !email || !password || !confirmPassword || !gender){
        toast.error('Please fill in all the fields!')
        return false

    }

    if (password !== confirmPassword){
        toast.error('Passwords do not match!')
        return false
    }

    if(password.length < 6){
        toast.error('Passwords must be atleast 6 characters!')
        return false
    }

    return true
}