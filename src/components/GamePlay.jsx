import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import Win from './Win';
import Draw from './Draw';
import Lose from './Lose';

import Button from './buttons'
import { BUTTON_TYPES } from '../commons/data/button';

const choices = [BUTTON_TYPES.SCISSORS, BUTTON_TYPES.PAPER, BUTTON_TYPES.ROCK, BUTTON_TYPES.LIZARD, BUTTON_TYPES.SPOCK]

export default function GamePlay(props) {
  const [userScore, setUserScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null);

  const { userChoice } = useParams();
  const navigate = useNavigate()

  useEffect( function () {
    const delayedRandomChoice = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const randomChoices = choices[randomIndex];
      setComputerChoice(randomChoices) // Get the computer's choice

      clearTimeout(delayedRandomChoice);
    }, 1000);
  }, []);

  useEffect(() => {
    // Calculate the winner once both choices are available
    if (userChoice && computerChoice) {
      const delayedResult = setTimeout(() => {
        const result = determineWinner(userChoice, computerChoice);
        setResult(result);
      }, 1000);

      return () => clearTimeout(delayedResult);
    }
  }, [userChoice, computerChoice, userScore, props]);


  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'A DRAW!';
    if (
      (userChoice === BUTTON_TYPES.ROCK && (computerChoice === BUTTON_TYPES.SCISSORS || computerChoice === BUTTON_TYPES.LIZARD)) ||
      (userChoice === BUTTON_TYPES.PAPER && (computerChoice === BUTTON_TYPES.ROCK || computerChoice === BUTTON_TYPES.SPOCK)) ||
      (userChoice === BUTTON_TYPES.SCISSORS && (computerChoice === BUTTON_TYPES.PAPER || computerChoice === BUTTON_TYPES.LIZARD)) ||
      (userChoice === BUTTON_TYPES.LIZARD && (computerChoice === BUTTON_TYPES.SPOCK || computerChoice === BUTTON_TYPES.PAPER)) ||
      (userChoice === BUTTON_TYPES.SPOCK && (computerChoice === BUTTON_TYPES.SCISSORS || computerChoice === BUTTON_TYPES.ROCK))
    ) {
      return 'YOU WIN';
    } else {
      return 'YOU LOSE';
    }
    
  };

  const playAgain = () => {
    navigate('/')
  }
  
  const btnPosition = `m-auto w-28 h-28`
  const imgSize = `w-20 h-20`

  return (
    <div className='flex flex-col justify-between h-[45vh]'>
      <div className='flex gap-[85px]'>
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

      <div className='flex flex-col justify-center items-center text-center'>
        {result ? (
          <div>
            <h1 className='text-5xl mb-5'>{result}</h1>
            <button onClick={playAgain} className='bg-white text-[hsl(229,25%,31%)] rounded-lg py-4 px-20'>PLAY AGAIN</button>
          </div>) : (<div>Thinking...</div>)}
      </div>
    </div>
  )
}
