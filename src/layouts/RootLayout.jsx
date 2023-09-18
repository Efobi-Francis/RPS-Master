import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import logobonus from '../assets/images/logo-bonus.svg'
import imagerules from '../assets/images/image-rules-bonus.svg'
import iconclose from '../assets/images/icon-close.svg'
import ScoreBoard from '../components/ScoreBoard'

export default function RootLayout() {
    const [isClicked, setIsClicked] = useState(false)

    const handleClickOpen = (event) => {
        setIsClicked(true)
    }

    const handleClickClose = (event) => {
        setIsClicked(false)
    }

    return (
        <div className=' sm:flex sm:flex-col h-screen bg-gradient-to-b from-[hsl(214,47%,23%)] to-[hsl(237,49%,15%)]'>
            <div className=' container mx-auto flex flex-col h-screen justify-between'>
                <header className='flex justify-between items-center outline outline-4 outline-[hsl(217,16%,45%)] rounded-lg mt-10 mb-5 p-2'>
                    <img src={logobonus} alt="logobonus" className='h-16 ml-5'/>
                    <div className='bg-white flex justify-center w-24 h-24 rounded-lg'>
                        <ScoreBoard/>
                    </div>
                </header>

                <main className=' text-white flex justify-center'>
                    <Outlet/>
                </main>

                <footer className=' flex justify-center text-white pb-20 font-Barlow'>
                    <button onClick={handleClickOpen} className=' border-2 border-white py-2 px-10 rounded-lg tracking-widest text-lg'>RULES</button>
                    {isClicked && 
                        (<div className='flex flex-col items-center justify-between h-screen w-full absolute top-0 bg-white pb-20'>
                            <h1 className='text-[hsl(229,25%,31%)] text-4xl mt-20 font-bold'>RULES</h1>
                            <img src={imagerules} alt="image-rules-bonus" />
                            <button onClick={handleClickClose}>
                                <img src={iconclose} alt="icon-close" />
                            </button>
                        </div>)}
                </footer>
            </div>
        </div>
    )
}
