import React from 'react'

const AnimatedBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-[#020617] dark:via-[#020617] dark:to-black"
    >
      {/* soft radial glow behind content */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-40 -left-24 h-72 w-72 rounded-full bg-cyan-500/35 blur-3xl animate-float-slow" />
        <div className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl animate-float-medium" />
        <div className="absolute bottom-[-6rem] left-10 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl animate-float-fast" />
      </div>

      {/* subtle beams / rays */}
      <div className="absolute inset-x-0 top-[-10%] mx-auto h-[420px] w-[1200px] -rotate-6 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_55%),linear-gradient(90deg,rgba(56,189,248,0.25),rgba(129,140,248,0.05),rgba(236,72,153,0.18))] opacity-70 blur-3xl" />
    </div>
  )
}

export default AnimatedBackground




