import React from "react";
import { BUTTON_TYPES } from "../../commons/data/button";

import iconScissors from '../../assets/images/icon-scissors.svg'
import iconPaper from '../../assets/images/icon-paper.svg'
import iconRock from '../../assets/images/icon-rock.svg'
import iconLizard from '../../assets/images/icon-lizard.svg'
import iconSpock from '../../assets/images/icon-spock.svg'

export default function Button(props) {
  const { type, btnIcon, btnPosition_Size, btnClick, imgSize, imgbg_size } = props;

  const btnStyle = `rounded-full flex justify-center items-center shadow-[inset_-0px_-10px_0_-2px_rgba(0,0,0,0.25)] cursor-pointer ring-1 ring-gray-900/5`;

  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.SCISSORS:
        return `bg-gradient-to-t from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] ${btnStyle}`;

      case BUTTON_TYPES.PAPER:
        return `bg-gradient-to-t from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] ${btnStyle}`;

      case BUTTON_TYPES.ROCK:
        return `bg-gradient-to-t from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)] ${btnStyle}`;

      case BUTTON_TYPES.LIZARD:
        return `bg-gradient-to-t from-[hsl(261,73%,60%)] to-[hsl(261,72%,63%)] ${btnStyle}`;

      case BUTTON_TYPES.SPOCK:
        return `bg-gradient-to-t from-[hsl(189,59%,53%)] to-[hsl(189,58%,57%)] ${btnStyle}`;

      default: ''
    }
  };

  const addButtonImg = () => {
    switch(btnIcon) {
      case BUTTON_TYPES.SCISSORS:
        return (
          <div className={`bg-white rounded-full w-16 h-16 ${imgbg_size} flex justify-center items-center shadow-[inset_0_6px_0_-1px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5`}>
            <img src={iconScissors} alt="icon-scissors" className={`h-8 ${imgSize}`}/>
          </div>
        )

      case BUTTON_TYPES.PAPER:
        return (
          <div className={`bg-white rounded-full w-16 h-16 ${imgbg_size} flex justify-center items-center shadow-[inset_0_6px_0_-1px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5`}>
            <img src={iconPaper} alt="icon-paper" className={`h-8 ${imgSize}`}/>
          </div>
        )

      case BUTTON_TYPES.ROCK:
        return (
          <div className={`bg-white rounded-full w-16 h-16 ${imgbg_size} flex justify-center items-center shadow-[inset_0_6px_0_-1px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5`}>
            <img src={iconRock} alt="icon-rock" className={`h-8 ${imgSize}`}/>
          </div>
        )

      case BUTTON_TYPES.LIZARD:
        return (
          <div className={`bg-white rounded-full w-16 h-16 ${imgbg_size} flex justify-center items-center shadow-[inset_0_6px_0_-1px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5`}>
            <img src={iconLizard} alt="icon-lizard" className={`h-8 ${imgSize}`}/>
          </div>
        )

      case BUTTON_TYPES.SPOCK:
        return (
          <div className={`bg-white rounded-full w-16 h-16 ${imgbg_size} flex justify-center items-center shadow-[inset_0_6px_0_-1px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5`}>
            <img src={iconSpock} alt="icon-spock" className={`h-8 ${imgSize}`}/>
          </div>
        )

      default: ''
    }
  }

  return (
    <button onClick={btnClick} className={`${getButtonClass()} ${btnPosition_Size}`}>{addButtonImg()}</button>
  );
}
