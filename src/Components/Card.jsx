import React,{useState} from 'react'
import profile from '../Assets/man.jpg'
import {BsChevronDown} from 'react-icons/bs'
import { Icon } from '@iconify/react';
import { Outlet, Link } from "react-router-dom";

export const Card = () => {
    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    // setActive(!active);
  return (
    <div className='hover:bg-[#E0FEFE]'>
        {/* onClick={handleClick}
    style={{ backgroundColor: active ? "#E0FEFE" : "#CAF0F8" }} */}
        <button>
        <div className='w-full h-24 border-t border-neutral-300 a'>
           <div className='flex pl-8 pt-6'>
                <div className='flex-initial w-12'>
                   <img src={profile} alt='profile' className='w-12 h-12 rounded-full'/> 
                </div>
                <div className='w-fit h-fit ml-2'>
                    <h1 className='text-lg float-left'>katrina</h1><br/>
                    <h1 className='text-sm float-left'>Hey! How are you?</h1>
                </div>
                <div className='w-36 h-fit'>
                    <div className='float-right'>
                        <BsChevronDown className='text-gray-500 float-right'/><br/>
                        <div className='flex mt-2'>
                            <div className='flex-initial w-fit'>
                            <Icon icon="mdi:check-all" className='text-gray-500'/>
                            </div>
                            <div className='flex-initial w-fit'>
                                <h1 className='text-gray-900 text-sm'>12:37pm</h1>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

        </div>
        </button>
    </div>
  )
}

export default Card;