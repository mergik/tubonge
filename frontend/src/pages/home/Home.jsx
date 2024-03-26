import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex h-full max-h-full rounded-lg overflow-hidden bg-dark justify-stretch'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
};

export default Home;