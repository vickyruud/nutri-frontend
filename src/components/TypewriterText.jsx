import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function TypewriterText() {
  return (
    <div className='text-5xl text-bold text-yellow-300 lg:text-7xl lg:px-56'>
      <TypeWriterEffect       
        startDelay={500}
        cursorColor="#FFFFFF"
        multiText={[
          'Carbs',
          'Fats',
          'Protein',
          'Sugars',
          'Fiber',
        ]}
        multiTextLoop={true}
        multiTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  )
}

export default TypewriterText