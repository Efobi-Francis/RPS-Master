import React from 'react'
import { useParams } from 'react-router-dom';

import Button from './buttons'
import { BUTTON_TYPES } from '../commons/data/button';

const choices = [BUTTON_TYPES.SCISSORS, BUTTON_TYPES.PAPER, BUTTON_TYPES.ROCK, BUTTON_TYPES.LIZARD, BUTTON_TYPES.SPOCK]

export default function GamePlay() {
  const { userChoice } = useParams();

  const randomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const computerChoice = randomChoice(); // Get the computer's choice

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'It\'s a tie!';
    if (
      (userChoice === BUTTON_TYPES.ROCK && (computerChoice === BUTTON_TYPES.SCISSORS || computerChoice === BUTTON_TYPES.LIZARD)) ||
      (userChoice === BUTTON_TYPES.PAPER && (computerChoice === BUTTON_TYPES.ROCK || computerChoice === BUTTON_TYPES.SPOCK)) ||
      (userChoice === BUTTON_TYPES.SCISSORS && (computerChoice === BUTTON_TYPES.PAPER || computerChoice === BUTTON_TYPES.LIZARD)) ||
      (userChoice === BUTTON_TYPES.LIZARD && (computerChoice === BUTTON_TYPES.SPOCK || computerChoice === BUTTON_TYPES.PAPER)) ||
      (userChoice === BUTTON_TYPES.SPOCK && (computerChoice === BUTTON_TYPES.SCISSORS || computerChoice === BUTTON_TYPES.ROCK))
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };
  
  const btnPosition = `m-auto w-28 h-28`
  const imgSize = `w-20 h-20`

  return (
    <div>
      <div className='flex gap-[90px] -mt-[50%]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-28 h-28 rounded-full bg-[hsl(237,49%,15%)]/50 mb-10 relative flex'>
            
            {/* dynamic content gets button chosen from select component using useParams*/}
            <Button type={userChoice}
              btnIcon={userChoice}
              btnPosition_Size={`${btnPosition}`}
            />
          </div>
          <span>YOU PICKED</span>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-28 h-28 rounded-full bg-[hsl(237,49%,15%)]/50 mb-10'>
            <Button type={computerChoice}
              btnIcon={computerChoice}
              btnPosition_Size={`${btnPosition}`}
            />
          </div>
          <span>THE HOUSE PICKED</span>
        </div>
      </div>

      <div className='flex justify-center'>
        {determineWinner(userChoice, computerChoice)}
      </div>
    </div>
  )
}
