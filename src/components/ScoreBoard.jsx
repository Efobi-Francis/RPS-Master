import React from 'react'
import { useScore } from './ScoreContext'

export default function ScoreBoard() {

  // Use the useScore hook to access the score
  const { score } = useScore();

  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-[hsl(229,64%,46%)]'>SCORE</span>
      <span className=' text-4xl text-black'>{score}</span>
    </div>
  )
}
