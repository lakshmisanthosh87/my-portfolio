import { skills } from '@/assests/assets'
import Tilt from 'react-parallax-tilt'
import React from 'react'


const Skills = () => {
  

  return (
    <div id='skills' className='text-white pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            my <span className='text-cyan-300'>Skills</span>
        </h1>

        <div className='flex flex=-wrap justify-center gap-6 mt-16'>
            {skills.map((skil)=>{
                <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                    <div className='bg-[#1413415] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                        <div className='text-5xl mb-4 text-gray-300 '>{skil.icon}</div>
                        <p className='text-purple-400 mt-1'>{skil.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  )
}

export default Skills