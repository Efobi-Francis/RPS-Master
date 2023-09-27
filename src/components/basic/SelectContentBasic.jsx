import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelect } from '../SelectContext'
import { useToggle } from '../ToggleContext'

import { BUTTON_TYPES, TOGGLE_TYPES } from '../../commons/data/button'

import Button from '../buttons'
import Toggle from '../toggle'

import bgTriangle from '../../assets/images/bg-triangle.svg'
import Loading from '../Loading'

export default function SelectContentBasic() {
    const [loading, setLoading] = useState(false)
    const [clicked, setClicked] = useState(false)

    const { handleUserChoice } = useSelect();
    const { toggleMode } = useToggle();

    const navigate = useNavigate()

    const handleToggle1 = () => {
        toggleMode(TOGGLE_TYPES.BONUS);
        setClicked(true)
        setTimeout( ()=> {
            //delays the navigation and browser reload, so that the loader screen in the useEffect can show
            navigate(`/${TOGGLE_TYPES.BONUS.toLowerCase()}`)
            window.location.reload(false);
        }, 2000)
    };

    useEffect( () => {
        if(clicked){
            setLoading(true)
            localStorage.removeItem('score');
        }
    }, [clicked])

    const paperStyle = `absolute -top-20 -left-10 w-40 h-40 lg:-right-16 lg:-top-16`
    const scissorsStyle = `absolute -top-20 -right-10 w-40 h-40 lg:-top-16`
    const rockStyle = `absolute -bottom-7 w-40 h-40 lg:-bottom-5`

    const imgBgSize = `!w-[110px] !h-[110px]`
    const imgHeight = `!h-14 lg:!h-16`

  return (
    <>
        {loading ? (
            <Loading/>
        ):(
            <>
                <div className='lg:absolute lg:top-[45%]'>
                    <div className='relative flex justify-center items-center'>
                        <img src={bgTriangle} alt="bg-pentagon" className='relative h-60 lg:h-72'/>

                        <Button type={BUTTON_TYPES.PAPER}
                            btnIcon={BUTTON_TYPES.PAPER}
                            btnPosition_Size={`${paperStyle}`}
                            btnClick={() => handleUserChoice(BUTTON_TYPES.PAPER)} // Pass the choice to the handler
                            imgbg_size={`${imgBgSize}`}
                            imgSize={`${imgHeight}`}
                        />

                        <Button type={BUTTON_TYPES.SCISSORS}
                            btnIcon={BUTTON_TYPES.SCISSORS}
                            btnPosition_Size={`${scissorsStyle}`}
                            btnClick={() => handleUserChoice(BUTTON_TYPES.SCISSORS)} // Pass the choice to the handler
                            imgbg_size={`${imgBgSize}`}
                            imgSize={`${imgHeight}`}
                        />

                        <Button type={BUTTON_TYPES.ROCK}
                            btnIcon={BUTTON_TYPES.ROCK}
                            btnPosition_Size={`${rockStyle}`}
                            btnClick={() => handleUserChoice(BUTTON_TYPES.ROCK)} // Pass the choice to the handler
                            imgbg_size={`${imgBgSize}`}
                            imgSize={`${imgHeight}`}
                        />
                    </div>
                </div>
                <Toggle
                    toggleText={TOGGLE_TYPES.BONUS}
                    toggleClick={ () => handleToggle1()}
                />
            </>
        )}
    </>
    
  )
}
