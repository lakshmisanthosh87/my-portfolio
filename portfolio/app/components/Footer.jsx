import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40">
      <div className="max-w-4xl mx-auto px-[8%] py-10 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-glow">
            LS
          </span>
          <span className="font-ovo text-slate-100 text-lg">Lakshmi Santhosh</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300 text-sm">
          <Image src={assets.mail_icon} alt="Mail" className="w-5" />
          <span>lakshmilachu567890@mail.com</span>
        </div>

        <ul className="mt-3 flex items-center gap-6 text-sm text-slate-300 justify-center">
          <li>
            <a target="_blank" href="https://github.com/lakshmisanthosh87" className="hover:text-cyan-300 transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/lakshmi-santhosh-81733b384?" className="hover:text-cyan-300 transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="" className="hover:text-cyan-300 transition-colors">
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-slate-800/80 py-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Lakshmi Santhosh. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer