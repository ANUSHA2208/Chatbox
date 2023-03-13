import React from 'react'
import profile from '../Assets/man.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import { Card } from './Card'
import Emptybg from './Emptybg'
import { Outlet, Link } from "react-router-dom";

export const LeftSlide = () => {
  return (
    <div className='ml-12 mt-12'>
    <div className='flex '>
         <div className='w-1/4 h-screen bg-[#CAF0F8] rounded-lg'>
            <div className='pl-8 pt-4 grid gap-x-52 gap-y-4 grid-cols-2'>
                <img className='w-12 h-12 rounded-full' alt='profile' src={profile}/>
                <div className='pt-4'>
                <HiOutlineDotsVertical className='text-lg'/>
                </div>
            </div>
            <div class="flex items-center justify-center ">
    <div class="flex rounded pt-8">
        <input type="text" class="px-4 py-2 w-64 rounded-l-lg" placeholder="Search..."/>
        <button class="px-4 text-white bg-[#03045E] border-l rounded-r-lg">
            <BiSearch/>
        </button>
    </div>
</div>
<div className='mt-8'>
            <Link to="/Chat">
            <Card/>
            </Link>
            <Card/>
            <Card/>
            </div>
         </div>
         <div class="w-2/3 bg-[#CAF0F8] rounded-lg ml-4">
          <Emptybg/>
         </div>
    </div>
    </div>
  )
}

export default LeftSlide;