import React, { useState } from 'react';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!search) return
    if(search.length < 3){
      return toast.error('Search term must be atleast 3 characters!')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    } else toast.error('No such user found!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2 bg-darkish m-2 font-poppins text-light">
        {/* Search Icon from Hero Icons */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <input type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value) }
         className="grow" placeholder="Search" />
      </label>
    </form>
  )
}

export default SearchInput;