import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function NotFound() {
    const navigate = useNavigate()

    const handleBackToSelect =() => {
        navigate(-1)
    }

  return (
    <div>
        <div className='hidden lg:block w-full h-screen bg-black/50 absolute inset-0 z-30'></div>

        <div className='hidden lg:flex flex-col absolute top-36 bottom-40 inset-x-0 m-auto bg-white px-6 py-20 rounded-lg z-40 w-1/3 h-fit'>
            <div className=' flex justify-center mb-6'>
                <span className='text-[hsl(229,25%,31%)] text-xl font-bold whitespace-nowrap'>Please Select Weapon 😎</span>
            </div>
            <button onClick={handleBackToSelect} className=' whitespace-nowrap text-black border-2 border-[hsl(217,16%,45%)] w-1/2 mx-auto py-2 rounded-lg'>👈 BACK</button>
        </div>
    </div>
  )
}
