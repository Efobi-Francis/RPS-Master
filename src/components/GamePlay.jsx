import React, { useEffect, useState } from 'react'
import { useScore } from './ScoreContext';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './buttons'
import { BUTTON_TYPES } from '../commons/data/button';

const choices = [BUTTON_TYPES.SCISSORS, BUTTON_TYPES.PAPER, BUTTON_TYPES.ROCK, BUTTON_TYPES.LIZARD, BUTTON_TYPES.SPOCK]

export default function GamePlay() {
  // Use the useScore hook to access score and updateScore
  const { score, updateScore } = useScore();

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

  useEffect(() => {
    // Calculate the winner once both choices are available
    if (userChoice && computerChoice) {
      const delayedResult = setTimeout(() => {
        const result = determineWinner(userChoice, computerChoice);
        setResult(result);

        // Use the updateScore function from the context to update the score
        if (result === 'YOU WIN') {
          updateScore('win');
        } else if (result === 'YOU LOSE' && score > 0) {
          updateScore('lose');
        }
      }, 1000);

      return () => clearTimeout(delayedResult);
    }
  }, [userChoice, computerChoice]);

  const playAgain = () => {
    navigate('/')
  }
  
  const btnPosition = `m-auto w-32 h-32`
  const imgBgSize = `!w-[85px] !h-[85px]`
  const imgHeight = `!h-12`

  return (
    <div className='flex flex-col justify-between h-[50vh] font-Barlow'>
      <div className='flex gap-16 tracking-widest'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-32 h-32 rounded-full bg-[hsl(237,49%,15%)]/50 mb-8 relative flex'>
            
            {/* dynamic content gets button chosen from select component using useParams*/}
            <Button type={userChoice}
              btnIcon={userChoice}
              btnPosition_Size={`${btnPosition}`}
              imgbg_size={`${imgBgSize}`}
              imgSize={`${imgHeight}`}
            />
          </div>
          <span>YOU PICKED</span>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-32 h-32 rounded-full bg-[hsl(237,49%,15%)]/50 mb-8 relative flex'>
            <Button type={computerChoice}
              btnIcon={computerChoice}
              btnPosition_Size={`${btnPosition}`}
              imgbg_size={`${imgBgSize}`}
              imgSize={`${imgHeight}`}
            />
          </div>
          <span>THE HOUSE PICKED</span>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center text-center'>
        {result ? (
          <div>
            <h1 className='text-6xl mb-5 font-bold'>{result}</h1>
            <button onClick={playAgain} className='bg-white text-[hsl(229,25%,31%)] text-lg tracking-widest rounded-lg py-4 px-20'>PLAY AGAIN</button>
          </div>) : (<div>Thinking...</div>)}
      </div>
    </div>
  )
}
