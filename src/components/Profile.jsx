import React from 'react'
import propic from '../assets/images/image-victor.jpg';
import backround from '../assets/images/bg-pattern-card.svg'
function Profile() {
  return (
    
    <>
    <div className='w-80 rounded-xl bg-slate-100 flex flex-col justify-center items-center'>
        <div className="section-1">
            <img className='rounded-t-lg' src={backround} alt="" />
        </div>
        <div className='section-2'>
        <div className='img relative p-1 -top-[3.2rem] bg-slate-100 rounded-full'>
            <img className='rounded-full' src={propic} alt="" />
        </div>
        <div className="name-age relative flex justify-center -top-10">
            <p>Name</p>
            <p>Age</p>
        </div>
        <p>Place</p>
        </div>
        <hr className='text-black' />
        <div className='section-3 flex justify-center items-center'>
             <div>
                <p>0</p>
                <span>Followers</span>
             </div>
             <div>
                <p>0</p>
                <span>Likes</span>
             </div>
             <div>
                <p>0</p>
                <span>Photos</span>
             </div>
        </div>
        
    </div>
    </>
  )
}

export default Profile