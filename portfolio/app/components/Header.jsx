import React from 'react'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect'
import { assets } from '@/assests/assets'

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">

      {/* Profile Image */}
      <div className="relative mb-2">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,rgba(56,189,248,0.4),rgba(129,140,248,0.2),rgba(236,72,153,0.4),rgba(56,189,248,0.4))] blur-2xl opacity-80 animate-pulse" />
        <div className="relative mt-10 rounded-full border border-cyan-400/40 bg-slate-900/60 p-1 shadow-[0_0_50px_rgba(56,189,248,0.8)]">
          <Image
            src="/images/sherin.png"
            width={200}
            height={200}
            alt="Profile"
            className="rounded-full w-32 sm:w-40 md:w-44"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl md:text-2xl font-ovo text-slate-100">
        Hi! I&apos;m Lakshmi Santhosh
      </h3>

      {/* Title */}
      <h5 className="text-2xl sm:text-4xl lg:text-[42px] font-ovo leading-snug text-slate-50">

        <span className="block mb-1 text-slate-300 text-base tracking-[0.3em] uppercase">
          MERN Stack Developer
        </span>

        <span className="block">
          Crafting{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            beautiful experiences
          </span>
        </span>

        <span className="block mt-1 text-cyan-300 text-lg sm:text-2xl">
          <TypeWriter
            options={{
              strings: [
                'Frontend Developer',
                'Backend Developer',
                'Web Developer',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </span>
      </h5>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-ovo text-slate-300 text-sm sm:text-base">
        I love building smooth, animated and responsive web apps that feel modern
        and alive. From pixel-perfect UIs to performant backends, I focus on
        creating experiences that people remember.
      </p>

      {/* View & Download Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

        {/* View Resume */}
        <a
          href="/resume/Lakshmi_santhosh-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-10 py-3 border rounded-full border-slate-600 flex items-center gap-2 bg-slate-900/70 text-slate-100 hover:bg-slate-900 hover:-translate-y-0.5 hover:border-cyan-400 transition-all duration-300"
        >
          {/* <Image
            src={assets.download_icon}
            alt="View Resume"
            className="w-4 h-4"
          /> */}
          <span>View Resume</span>
        </a>

        {/* Download Resume */}
        <a
          href="/resume/Lakshmi_santhosh-cv.pdf"
          download
          className="group px-10 py-3 border border-transparent rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center gap-2 shadow-lg shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-600 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Image
            src={assets.download_icon}
            alt="Download Resume"
            className="w-4 h-4"
          />
          <span>Download CV</span>
        </a>

      </div>

    </div>
  )
}

export default Header
