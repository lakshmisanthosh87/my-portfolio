import { assets, infoList, toolsData } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo text-slate-300">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-ovo text-slate-50">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20 my-16 lg:my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none relative group">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-400/50 via-sky-500/30 to-purple-600/50 opacity-70 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500" />
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
            <Image
              src="/images/sherin.png"
              alt="user"
              width={320} height={320}
              className="w-full rounded-3xl scale-105 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo text-slate-200 leading-relaxed">
            I am a passionate MERN Stack Developer with hands-on experience in building modern, responsive, and
            user-friendly web applications. I work with technologies like React, Next.js, Node.js, Express, and MongoDB
            to create clean user interfaces and efficient backend APIs. I enjoy learning new technologies, solving
            problems, and continuously improving my skills by building real-world projects.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="group relative overflow-hidden border border-slate-700/80 rounded-2xl p-6 cursor-pointer bg-slate-900/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_70px_rgba(56,189,248,0.6)]"
              >
                <div className="pointer-events-none absolute inset-px rounded-[1.1rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Image src={icon} alt={title} className="w-7 mt-2" />
                <h3 className="my-3 font-semibold text-slate-50">{title}</h3>
                <p className="text-slate-300 text-sm leading-6">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-slate-200 font-ovo">Tools I use</h4>

          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-slate-700/80 rounded-xl cursor-pointer bg-slate-900/80 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all duration-300"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About