import React from 'react'
import FriendCard from './FriendCard';

const Friendlist = ({data, ondelete}) => {
    // console.log(data)
  return (
    <div className='w-full h-auto flex justify-center items-center p-10 gap-10'>
      {data.map((friend)=>(<FriendCard key={friend.id} frienddata={friend} ondelete={ondelete}/>))}
    </div>
  )
}

export default Friendlist
