import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assests/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [theme, setTheme] = useState('dark')
  const sideMenuRef = useRef(null)

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') || 'dark'
    setTheme(stored)
    document.documentElement.classList.toggle('dark', stored === 'dark')

    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem('theme', next)
  }

  return (
    <>
      {/* removed white header background image to keep full dark / gradient look */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? 'bg-slate-950/75 backdrop-blur-xl shadow-sm shadow-cyan-500/20' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="text-2xl font-semibold tracking-tight cursor-pointer text-slate-50">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-glow">
            LS
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-slate-900/70 border border-slate-700/80 shadow-[0_18px_45px_rgba(15,23,42,0.8)] backdrop-blur-xl">
          {[
            { href: '#top', label: 'Home' },
            { href: '#about', label: 'About me' },
            { href: '#skills', label: 'Skills' },
            { href: '#services', label: 'Services' },
            { href: '#work', label: 'My Work' },
            { href: '#contact', label: 'Contact me' },
          ].map((item) => (
            <li key={item.href}>
              <a
                className="relative font-ovo text-sm text-slate-200 hover:text-cyan-300 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r from-cyan-400 to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-600 bg-slate-900/80 hover:bg-slate-800 transition-colors shadow-md"
          >
            <Image
              src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
              alt="Theme toggle"
              className="w-5"
            />
          </button> */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-cyan-400/70 rounded-full ml-2 font-ovo text-sm text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-600 shadow-lg shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3 rounded-full border border-slate-600 p-2 bg-slate-900/80"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="" className="w-4 invert" />
          </button>
        </div>

        {/*-------- mobile menu -------*/}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-950/95 border-l border-slate-800 shadow-2xl shadow-black/70 transition-transform duration-500"
        >
          <div className="absolute right-6 top-6 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-600 bg-slate-900/80 hover:bg-slate-800 transition-colors"
            >
              <Image
                src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
                alt="Theme toggle"
                className="w-4"
              />
            </button>
            <Image src={assets.close_black} alt="" onClick={closeMenu} className="w-5 cursor-pointer invert" />
          </div>
          <li>
            <a className="font-ovo text-slate-100" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo text-slate-100" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo text-slate-100" onClick={closeMenu} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-ovo text-slate-100" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo text-slate-100" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo text-slate-100" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar