import { useState } from 'react'
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSlitBill from './components/FormSlitBill';
import Button from './components/Button';




function App() {

  return (
    <div className='app'>
      <div className="sidebar">
      <FriendsList />

        <FormAddFriend />
        
        <Button>Add Friend</Button>
      </div>

      
      <FormSlitBill/>
    </div>
  )
}

export default App
