import React from 'react'
import { TOGGLE_TYPES } from '../../commons/data/button';

export default function toggle(props) {
    const { toggleText, toggleClick } = props;

    const getToggleText=()=>{
        switch (toggleText) {
            case TOGGLE_TYPES.BASIC:
                return 'BASIC MODE';
            case TOGGLE_TYPES.BONUS:
                return 'BONUS MODE' ;  
            default: '';
        }
    }

  return (
    <button onClick={toggleClick} className='absolute bottom-0 mt-3 mb-2 whitespace-nowrap text-white font-Barlow border-2 border-white py-2 px-10 rounded-lg tracking-widest text-lg lg:mb-10 lg:left-0 lg:ml-10'>{`${getToggleText()}`}</button>
  )
}
