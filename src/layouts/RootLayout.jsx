import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import logo from '../assets/images/logo.svg'
import logobonus from '../assets/images/logo-bonus.svg'
import imagerules from '../assets/images/image-rules.svg'
import imagerulesbonus from '../assets/images/image-rules-bonus.svg'
import iconclose from '../assets/images/icon-close.svg'
import ScoreBoard from '../components/ScoreBoard'

export default function RootLayout() {
    const [isClicked, setIsClicked] = useState(false)
    const [currentImage, setCurrentImage] = useState()

    const { mode } = useParams() 
    
    useEffect(() => {
        // Depending on the selected mode, set the appropriate image
        setCurrentImage(mode)
    }, [mode]);
    
    const handleClickOpen = (event) => {
        setIsClicked(true)
    }

    const handleClickClose = (event) => {
        setIsClicked(false)
    }

    return (
        <div className=' sm:flex sm:flex-col h-screen bg-gradient-to-b from-[hsl(214,47%,23%)] to-[hsl(237,49%,15%)] lg:relative overflow-hidden'>
            <div className=' container mx-auto flex flex-col h-screen justify-between lg:max-w-3xl'>
                <header className='flex justify-between items-center outline outline-4 outline-[hsl(217,16%,45%)] rounded-lg mt-5 mb-5 p-2 lg:p-5 lg:mt-10 lg:outline-2 lg:mx-10'>
                    {!currentImage ? (
                        <img src={logo} alt="logo" className='h-16 ml-5 lg:h-auto'/>
                    ):(
                        <img src={logobonus} alt="logo" className='h-16 ml-5 lg:h-auto'/>
                    )}
                    <div className='bg-white flex justify-center w-24 h-24 rounded-lg lg:w-32 lg:h-[115px]'>
                        <ScoreBoard/>
                    </div>
                </header>

                <main className=' text-white flex justify-center'>
                    <Outlet/>
                </main>

                <footer className=' flex justify-center text-white pb-20 font-Barlow '>
                    <button onClick={handleClickOpen} className='relative bottom-10 border-2 border-white py-2 px-10 rounded-lg tracking-widest text-lg lg:absolute lg:bottom-0 lg:right-0 lg:mb-10 lg:mr-10'>RULES</button>
                    {isClicked && (
                        <>
                            <div className='lg:hidden flex flex-col items-center justify-between h-screen w-full absolute top-0 bg-white pb-24 z-30'>
                                <h1 className='text-[hsl(229,25%,31%)] text-4xl mt-20 font-bold'>RULES</h1>
                                {!currentImage ? (
                                    <img src={imagerules} alt="image-rules-bonus"/>
                                ):(
                                    <img src={imagerulesbonus} alt="image-rules-bonus"/>
                                )}
                                <button onClick={handleClickClose}>
                                    <img src={iconclose} alt="icon-close"/>
                                </button>
                            </div>

                            {/* overlay */}
                            <div className='hidden lg:block w-full h-screen bg-black/50 absolute inset-0 z-30'></div>

                            <div className='hidden lg:flex flex-col absolute top-36 bottom-40 bg-white px-6 py-5 rounded-lg z-30'>
                                <div className=' flex justify-between'>
                                    <span className='text-[hsl(229,25%,31%)] text-3xl font-bold'>RULES</span>
                                    <button onClick={handleClickClose}>
                                        <img src={iconclose} alt="icon-close"/>
                                    </button>
                                </div>
                                {!currentImage ? (
                                    <img src={imagerules} alt="image-rules" className='mt-16'/>
                                ):(
                                    <img src={imagerulesbonus} alt="image-rules" className='mt-7'/>
                                )} 
                            </div>
                        </>
                    )}
                </footer>
            </div>
        </div>
    )
}
