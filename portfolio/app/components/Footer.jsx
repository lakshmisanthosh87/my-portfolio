import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
     <footer className="mt-20 border-t border-slate-800 bg-gradient-to-t from-slate-950 to-slate-900">
      
      {/* Center branding */}
      <div className="py-10 flex flex-col items-center gap-4 text-center">
        <div className="px-5 py-2 rounded-full border border-slate-700 bg-slate-900/60 text-sm text-slate-300">
          <span className="text-cyan-400 font-medium">
            Lakshmi Santhosh
          </span>
          <span className="mx-2 text-slate-500">•</span>
          MERN Stack Developer
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Lakshmi Santhosh. All rights reserved.
        </p>
      </div>

      {/* Scroll to top button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition"
      >
        ↑
      </a>
    </footer>
  )
}

export default Footer