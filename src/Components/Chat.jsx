import React from 'react'
import profile from '../Assets/man.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineSend} from 'react-icons/ai'

export const Chat = () => {
    function getCurrentDate(separator='-'){

        let myCurrentDate = new Date()
        let date = myCurrentDate.getDate();
        let month = myCurrentDate.getMonth() + 1;
        let year = myCurrentDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }
  return (
<div>
<div class="flex flex-col w-full h-screen space-y-4 ... ">

       <div className='w-full h-20 border-b border-neutral-300'>
       <div className='flex pl-8 pr-8 pt-4'>

                <div className='flex-initial w-1/2 float-left'>
                   <img src={profile} alt='profile' className='w-12 h-12 rounded-full'/> 
                </div>

                 <div className='w-1/2 float-right pr-8'>
                <div className='float-right h-fit ml-2 flex pt-4 '>
                <button class="flex-auto w-12 mt-1">
                    <BiSearch class="text-lg"/>
                </button>

                <button className='flex-auto'>
                   <HiOutlineDotsVertical class="text-lg"/>
                </button>
                </div>
                </div>

                </div>
       </div>
    <div class="flex flex-col justify-center items-center">
       <div class="w-24 h-8 bg-[#03045E] rounded-full">
       <div className='text-[#ffff] font-light text-center pt-1'>{getCurrentDate()}</div>
       </div>
       </div>

       <div class="flex flex-col w-full p-8 h-screen">  
        <div class="mt-auto p-10 w-full border-t border-neutral-300">

        <div class="flex rounded flex-col justify-center items-center">
          <div className='flex'>
        <input type="text"  class="flex-initial h-10 x rounded-l-lg y" placeholder="  Message"/>
        <button  class="flex-initial px-4 text-white bg-[#03045E] border-l rounded-r-lg">
            <AiOutlineSend/>
        </button>
        </div>
        </div>

        </div>
    </div>

    </div>
</div>

  )
  }

export default Chat;