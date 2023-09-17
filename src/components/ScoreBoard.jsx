import React from 'react'
import logobonus from '../assets/images/logo-bonus.svg'

export default function ScoreBoard(props) {

  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-[hsl(229,64%,46%)]'>SCORE</span>
      <span className=' text-4xl text-black'>{props.score}</span>
    </div>
  )
}
