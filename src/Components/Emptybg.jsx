import React from 'react'
import image from '../Assets/2.png'

export const Emptybg = () => {
  return (
  <div className='mt-24'>
    <div class="flex flex-col space-y-4 ... ">
  <div className='flex justify-center'>
  <img src={image} alt='img' />
  </div>
  <div>
    <h1 class="text-2xl font-bold text-center">ChatBox</h1>
  </div>
  <div>
    <h1 class="text-xl font-medium text-center">Welcome to our chat! Let's start the conversation.</h1>
  </div>
</div>
</div>
  )
}

export default Emptybg;