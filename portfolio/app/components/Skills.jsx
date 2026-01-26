import { skills } from '@/assests/assets'
import Tilt from 'react-parallax-tilt'
import React from 'react'


const Skills = () => {
  

  return (
    <div id='skills' className='text-white pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
            my <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Skills</span>
        </h1>

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-16 max-w-6xl mx-auto'>
            {skills.map((skil) => (
    <Tilt key={skil.name} scale={1.05} transitionSpeed={400}>
<div className='bg-white border border-gray-200 text-center w-40 h-44 rounded-2xl 
flex flex-col items-center justify-center shadow-sm 
hover:shadow-md transition'>
            <div className='text-5xl mb-4 text-gray-600'>
                {skil.icon}
            </div>
            <p className='text-gray-500 mt-2 font-medium'>{skil.name}</p>
        </div>
    </Tilt>
))}

        
        </div>
    </div>
  )
}

export default Skills