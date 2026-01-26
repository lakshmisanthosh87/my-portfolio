import { assets } from '@/assests/assets'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect'
import React from 'react'
import  { motion } from 'framer-motion'
import { scale } from 'motion'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type:'spring', stiffness:100}}
        >
            <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>
        </motion.div>

        <h3 
         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>Hi! I'm Lakshmi Santhosh <Image src={assets.hand_icon} alt="" className='w-6'/></h3>

        <h5
       className='text-xl sm:text-6xl lg:text-[40px] font-Ovo'>  <span>A Passionate -</span> <span className='text-cyan-400'><TypeWriter options={{ strings: ['Frontend Developer', 'Backend Developer', 'Web Developer'], autoStart: true, loop: true,delay:75,deleteSpeed:50}} /></span></h5>

        <p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.6, delay:0.7}} className='max-w-2xl mx-auto font-Ovo'>
           A passionate web developer who enjoys building scalable, responsive, and user-friendly applications using modern technologies.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a   href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me <Image src={assets.right_arrow_white} alt="" className='w-4'/></a>
            <a
            
             href="/sample-resume.pdf" download  className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume <Image src={assets.right_arrow_white} alt="" className='w-4'/></a>

        </div>

    </div>
  )
}

export default Header