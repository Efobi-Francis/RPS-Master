import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BUTTON_TYPES } from '../commons/data/button'
import Button from './buttons'

import bgPentagon from '../assets/images/bg-pentagon.svg'


export default function Select() {
  const navigate = useNavigate()

  const handleUserChoice = (choice) => {
    navigate(`play/${choice}`)
  };

  const scissorsStyle = `absolute -top-10 w-24 h-24`
  const paperStyle = `absolute top-10 -right-10 w-24 h-24`
  const rockStyle = `absolute -bottom-10 right-2 w-24 h-24`
  const lizardStyle = `absolute -bottom-10 left-2 w-24 h-24`
  const spokStyle = `absolute top-10 -left-10 w-24 h-24`

  return (
    <div>
      <div className='relative flex justify-center items-center'>
        <img src={bgPentagon} alt="bg-pentagon" className='relative h-60'/>

        <Button type={BUTTON_TYPES.SCISSORS}
          btnIcon={BUTTON_TYPES.SCISSORS}
          btnPosition_Size={`${scissorsStyle}`}
          btnClick={() => handleUserChoice(BUTTON_TYPES.SCISSORS)} // Pass the choice to the handler
        />

        <Button type={BUTTON_TYPES.PAPER}
          btnIcon={BUTTON_TYPES.PAPER}
          btnPosition_Size={`${paperStyle}`}
          btnClick={() => handleUserChoice(BUTTON_TYPES.PAPER)} // Pass the choice to the handler
        />

        <Button type={BUTTON_TYPES.ROCK}
          btnIcon={BUTTON_TYPES.ROCK}
          btnPosition_Size={`${rockStyle}`}
          btnClick={() => handleUserChoice(BUTTON_TYPES.ROCK)} // Pass the choice to the handler
        />

        <Button type={BUTTON_TYPES.LIZARD}
          btnIcon={BUTTON_TYPES.LIZARD}
          btnPosition_Size={`${lizardStyle}`}
          btnClick={() => handleUserChoice(BUTTON_TYPES.LIZARD)} // Pass the choice to the handler
        />

        <Button type={BUTTON_TYPES.SPOCK}
          btnIcon={BUTTON_TYPES.SPOCK}
          btnPosition_Size={`${spokStyle}`}
          btnClick={() => handleUserChoice(BUTTON_TYPES.SPOCK)} // Pass the choice to the handler
        />

      </div>
    </div>
  )
}
