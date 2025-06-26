import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import Friendlist from './components/FriendList';
import AddFriend from './components/AddFriend';

const App = () => {
  const [data, setdata] = useState([
    // {id:1, name:"Akash Hedaoo", image:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stack:"MERN Stack", Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque."},
    // {id:2, name:"Akash Hedaoo", image:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stack:"MERN Stack", Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque."},
    // {id:3, name:"Akash Hedaoo", image:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stack:"MERN Stack", Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque."},
    // {id:4, name:"Akash Hedaoo", image:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stack:"MERN Stack", Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque."},
  ])

  const handlesubmit=(newfriend)=>{
    setdata((previousdata)=>[...previousdata,{id:nanoid(),...newfriend}])
  }
  const handledelete = (id) => {
  const updatedFriends = data.filter(friend => friend.id !== id);
  setdata(updatedFriends);
};
  return (
    <div className='w-screen h-screen bg-zinc-400 p-3'>
      <h1 className='text-center text-4xl my-5'>Welcome to <span className='text-5xl text-violet-800 font-semibold'>Dev-Buddy</span></h1>
      <AddFriend onAddfriend={handlesubmit}/>
      <Friendlist data ={data} ondelete={handledelete}/>
      
    </div>
  )
}

export default App
