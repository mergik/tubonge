import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 h-screen max-h-screen max-w-[300px] min-w-[50px] md:max-w-[450px]'>
        <SearchInput />
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar;