import React from 'react'
import propic from '../assets/images/image-victor.jpg';
import backround from '../assets/images/bg-pattern-card.svg'
function Profile() {
  return (
    
    <>
    <div className='w-80 rounded-xl bg-slate-100 flex flex-col justify-center items-center'>
        
        <div className="section-1 w-full">
            <img className='rounded-t-lg w-full' src={backround} alt="" />
        </div>
        <div className='section-2'>
           
        <div className='img relative p-1 m-5 -mt-12 bg-slate-100 rounded-full'>
            <img className='rounded-full' src={propic} alt="" />
        </div>
         
        <div className="name-age   flex justify-center mt-4 -top-20">
            <p className='font-bold text-lg mr-2'>Victor Crest</p>
            <p className='text-[#6a6f81] text-lg'>26</p>
        </div>
         
        <p className='text-sm text-[#6a6f81] mt-3'>London</p>
        </div>
         
        <hr className=' border-t border-[#dddbdb] w-full mt-5' />
        {/* section-3 */}
        <div className='w-full flex justify-around items-center mt-4 pb-4'>
          <div className='flex justify-between relative'>
             <div className='mx-8'>
                <p className='font-bold'>80K</p>
                <span className='text-xs text-[#6a6f81]'>Followers</span>
             </div>
             <div className='mx-8'>
                <p className='font-bold'>803K</p>
                <span className='text-xs text-[#6a6f81]' >Likes</span>
             </div>
             <div className='mx-8'>
                <p className='font-bold'>1.4K</p>
                <span className='text-xs text-[#6a6f81]' >Photos</span>
             </div>
          </div>
             
        </div>
        
    </div>
    </>
  )
}

export default Profile