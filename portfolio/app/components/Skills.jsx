import { skills } from '@/assests/assets'
import Tilt from 'react-parallax-tilt'
import React from 'react'
import { GlowingEffect } from './GlowingEffect'

const Skills = () => {
  return (
    <div id="skills" className="pt-16 pb-20">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-slate-50">
        My{' '}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-16 max-w-6xl mx-auto">
        {skills.map((skil) => (
          <Tilt key={skil.name} scale={1.05} transitionSpeed={400}>
            <div className="relative w-40 h-44 mx-auto group">
              <GlowingEffect
                disabled={false}
                blur={18}
                spread={26}
                proximity={80}
                glow
                className="mix-blend-screen"
              />

              <div className="relative bg-slate-950/80 border border-slate-800/80 text-center w-full h-full rounded-2xl flex flex-col items-center justify-center shadow-[0_18px_40px_rgba(15,23,42,0.9)] group-hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-3 text-slate-50">
                  {skil.icon}
                </div>
                <p className="text-slate-200 mt-1 font-medium text-sm">{skil.name}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default Skills