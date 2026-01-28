import { assets, serviceData } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

export const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo text-slate-300">What I offer</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-ovo text-slate-50">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-slate-300">
        I build modern, fast and beautiful web experiences using the MERN stack.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => {
          const Icon = icon

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 px-8 py-10 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_22px_70px_rgba(56,189,248,0.6)]"
            >
              <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 mb-5 p-3 shadow-inner shadow-cyan-500/40">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="text-lg font-semibold my-2 text-slate-50">{title}</h3>
                <p className="text-sm text-slate-300 leading-6">{description}</p>

                <span
  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 cursor-default"
>
  Read more
  <Image
    src={assets.right_arrow}
    alt=""
    className="w-4"
  />
</span>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
