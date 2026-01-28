import { workData } from '@/assests/assets'
import React from 'react'
import { GlowingEffect } from './GlowingEffect'

const Work = () => {
  return (
    <section id="work" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo text-slate-300">Selected projects</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-ovo text-slate-50">My Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-slate-200">
        A quick look at some of the websites and applications I&apos;ve built, with their tech stacks and core features.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {workData.map((item, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/90 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-500 hover:-translate-y-3"
          >
            <GlowingEffect
              disabled={false}
              blur={20}
              spread={30}
              proximity={120}
              glow
              className="mix-blend-screen"
            />

            <div className="relative p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-6">{item.description}</p>
              {item.techStack && item.techStack.length > 0 && (
                <p className="text-sm text-cyan-300">
                  Tech stack:{' '}
                  <span className="text-slate-100">{item.techStack.join(', ')}</span>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
