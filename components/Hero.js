import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Hero = () => {
  const profileVarient = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <div
      id="hero"
      className="bg-gradient-to-b from-blue-300  to-blue-900  h-screen w-full flex flex-col items-center justify-start "
    >
      <div className=" mt-20   min-w-max">
        {/* div 1  */}
        <div className="relative p-2">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl blur "></div>
          <div className=" relative flex space-x-5 bg-black text-white rounded-lg p-3">
            <span className=" text-3xl text-center">👋</span>
            <div className="flex flex-col">
              <span className=""> Hi , I am</span>

              <span className=" font-bold text-lg">Khushaal Choithramani</span>
            </div>
          </div>
        </div>
        {/* end div 1  */}
      </div>
      <div className="relative pb-5 mt-6">
        <div className="absolute -inset-0.5 bg-gradient-to-b  to-yellow-900 rounded-full blur "></div>
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={profileVarient}
        >
          <Image
            src="https://pbs.twimg.com/profile_images/1458835398319218703/oX3WAyP-_400x400.jpg"
            alt="Profile image"
            className="rounded-full border-4 border-white relative"
            // layout="fill"
            objectFit="cover"
            height={200}
            width={200}
          />
        </motion.div>
      </div>

      <div className="mt-10">
        <p className="text-4xl font-style-2 tracking-[0.2rem] text-transparent bg-clip-text bg-gradient-to-br from-white  to-blue-200 font-extrabold text-center">
          Freelance Blockchain and Frontend Developer
        </p>
        <p className="text-center mt-2 text-sm font-bold tracking-widest text-gray-300">
          I build blockchain dapps, frontends and mobile apps ⚡️
        </p>
        <p className="text-center mt-2 text-2xl font-bold tracking-widest text-gray-300">
          Based in Mumbai , India 📍
        </p>
      </div>
    </div>
  )
}

export default Hero
