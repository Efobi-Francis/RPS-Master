import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

export default function Loading() {
    const color = `#ffffff`

  return (
    <div className='absolute h-screen bg-black/80 w-full inset-0 flex justify-center items-center z-50'>
        <HashLoader
            color={color}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}
