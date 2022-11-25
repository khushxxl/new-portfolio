import { img1 } from '../images/img1.png'
import { DeviceMobileIcon } from '@heroicons/react/solid'
import { businessData } from '../data'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Services = () => {
  const profileVarient = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const imageVarient = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
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
      id="services"
      className=" bg-[#03001E] flex flex-col justify-start items-center "
    >
      <div>
        <p className="text-white text-center xl:text-left tracking-wide font-bold text-5xl mt-12 font-style-4">
          Let's Build Something Awesome 🚀
        </p>
      </div>

      <div className="text-white flex flex-col xl:flex-row w-full justify-between max-w-6xl  ">
        {/* left div  */}
        <div className="mt-10 flex flex-col items-center xl:items-start justify-start  ">
          <div>
            <p className="font-semibold tracking-widest text-center xl:text-left text-2xl text-gray-400">
              My Services
            </p>
            <p className="text-5xl font-style-4 text-center xl:text-left max-w-lg mt-3 font-extrabold">
              The most creative intuitive workmate
            </p>
          </div>
          <motion.div
            ref={ref}
            variants={profileVarient}
            animate={control}
            initial="hidden"
          >
            <Image
              src="https://i.ibb.co/tbWf57K/img1.png"
              className="shadow-2xl "
              height={300}
              width={300}
              objectFit="cover"
            />
          </motion.div>
        </div>
        {/* right div  */}

        <div className="mt-10 space-y-10 mb-10 flex flex-col items-center xl:items-end">
          {businessData.map((data) => {
            return (
              <motion.div
                ref={ref}
                variants={profileVarient}
                animate={control}
                initial="hidden"
                key={data.id}
                className="relative cursor-pointer transition-all duration-150 xl:hover:scale-105"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl blur "></div>
                <div
                  key={data.id}
                  className="bg-[#1E1535] relative space-y-4 max-w-sm   min-w-max p-4 rounded-lg"
                >
                  <div className="flex items-center space-x-2 ">
                    <p className="h-5 w-5">{data.icon}</p>
                    <p className="text-xl font-custom-font-1  font-semibold tracking-wide">
                      {data.title}
                    </p>
                  </div>

                  <p className="max-w-xs xl:max-w-sm mt-10">{data.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
