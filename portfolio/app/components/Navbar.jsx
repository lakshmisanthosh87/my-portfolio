import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assests/assets'

const Navbar = () => {

    const [isScroll , setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu =()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translatex(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY >50){

                setIsScroll(true)

            }else{
                setIsScroll(false)

            }
        })

    },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt=""/>
    </div>
       <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between  z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm " : ""}`}>
        <a href="#top" className='text-4xl cursor-pointer'>
            LS
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-20 py-3 ${isScroll ?"" : " bg-white shadow-sm bg-opacity-50     "}`}>
            <li><a className='font-ovo' href="#top">Home</a></li>
            <li><a className='font-ovo' href="#about">About me</a></li>
            <li><a className='font-ovo' href="#skills">Skills</a></li>
            <li><a className='font-ovo' href="#services">Services</a></li>
            <li><a className='font-ovo' href="#work">My Work</a></li>
            <li><a className='font-ovo' href="#contact">Contact me</a></li>
            
        </ul>

        <div className='flex gap-4'>
            <button>
                <Image src={assets.moon_icon} alt="" className='w-6'/>
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>Contact <Image src={assets.arrow_icon} alt="" className='w-3'/></a>
            
            <button className='block md:hidden ml-3'>
                <Image src={assets.menu_black} onClick={openMenu} alt="" className='w-4'/>
            </button>

        </div>

        {/*-------- mobile menu -------*/}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute right-6 top-6'>
                <Image src={assets.close_black} alt='' onClick={closeMenu} className='w-5 cursor-pointer'/>
            </div>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">About me</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">My Work</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">Contact me</a></li>
        </ul>
       </nav>
    </>
  )
}

export default Navbar