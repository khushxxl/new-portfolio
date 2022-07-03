import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { businessData, workDone } from '../data'

const Testimonials = () => {
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
      id="exp"
      className="bg-[#03001E] flex flex-col items-center justify-center "
    >
      <div className="shadow-xl">
        <p className="text-white font-style-4 tracking-wider  text-center xl:text-center font-bold text-5xl mt-12">
          Work Experience 💻
        </p>
        <div ref={ref}>
          <div className="text-white grid  place-items-center place-content-center grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-x-0 gap-y-10 mt-20">
            {workDone.map((data) => {
              return (
                <motion.div
                  transition={{ delay: 1 }}
                  ref={ref}
                  animate={control}
                  variants={profileVarient}
                  className="relative cursor-pointer max-w-md transition-all duration-150 xl:hover:scale-105"
                >
                  <div className="absolute -inset-0.5  bg-gradient-to-r from-yellow-300 to-yellow-800 rounded-2xl blur "></div>
                  <div
                    key={data.id}
                    className="bg-[#1E1535] text-left relative space-y-4 max-w-sm    min-w-max p-4 rounded-lg"
                  >
                    <div className="flex items-start flex-col ">
                      <p className="text-xl font-style-4  font-semibold tracking-wide text-left">
                        {data.name}
                      </p>
                      <p className="text-gray-300">My Role: {data.role}</p>
                    </div>

                    <p className="max-w-xs xl:max-w-sm mt-10">{data.about}</p>
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

export default Testimonials
