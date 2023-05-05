import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { businessData, testimonials, workDone } from '../data'
import { UserCircleIcon } from '@heroicons/react/outline'

const Review = () => {
  const profileVarient = {
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
      id="testi"
      className="bg-[#03001E] flex flex-col items-center justify-center"
    >
      <div className="shadow-xl mt-20">
        <p className="text-white font-style-4 tracking-wider  text-center xl:text-center font-bold text-5xl ">
          Client Testimonials 📝
        </p>
        <div>
          <div className="flex flex-col items-center lg:items-start mt-20 justify-center space-y-20 xl:space-y-0 xl:flex-row xl:space-x-14 text-white">
            {testimonials.map((data) => {
              return (
                <motion.div
                  variants={profileVarient}
                  ref={ref}
                  animate={control}
                  className=" cursor-pointer max-w-md transition-all ease-in duration-150 hover:scale-110    max-h-max"
                >
                  <div className="absolute -inset-0.5  bg-gradient-to-r from-yellow-300 to-yellow-800 rounded-2xl blur "></div>
                  <div
                    key={data.id}
                    className="bg-[#1E1535] text-left relative space-y-4 max-w-sm min-w-max p-4 rounded-lg"
                  >
                    <div className="flex  items-center space-x-5 ">
                      <div>
                        <UserCircleIcon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <p className="text-xl  font-semibold tracking-wide text-left">
                          {data.name}
                        </p>
                        <p className="text-gray-300">{data.work}</p>
                      </div>
                    </div>

                    <p className="max-w-xs xl:max-w-sm mt-10">{data.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
        {/* <div className="flex items-center justify-center">
      <img
        src="https://i.ibb.co/19j7J8Q/testimonial-01.jpg"
        alt=""
        className="h-[300px] w-[300px]"
      />
    </div> */}
      </div>
    </div>
  )
}

export default Review
