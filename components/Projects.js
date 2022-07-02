import { projectData } from '../data'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
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
    <motion.div
      id="projects"
      className="bg-[#03001E]  flex flex-col items-center justify-start "
    >
      <div>
        <p className="text-white font-style-2   text-center xl:text-center tracking-wider flex flex-col items-center justify-center font-bold text-5xl mt-24">
          Awesome Projects ✨
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 w-full  gap-x-20 gap-y-10 items-center place-items-center ">
          {projectData.map((data) => {
            return (
              <motion.div
                // variants={profileVarient}
                // ref={ref}
                // animate={control}
                className="relative cursor-pointer max-w-md transition-all xl:hover:scale-105 duration-150 rounded-2xl"
              >
                <div className="absolute -inset-0.5  bg-gradient-to-b from-red-200 to-red-800 rounded-2xl blur "></div>
                <div className="bg-[#1E1535] relative text-white rounded-xl p-2 flex flex-col items-center justify-center">
                  <p className="tracking-widest font-custom-font-1 font-semibold text-xl mb-3">
                    {data.name}
                  </p>
                  <a href={data.deployedLink}>
                    <Image
                      src={data.image}
                      alt={`${data.name}'s image`}
                      className=" rounded-xl cursor-pointer"
                      height={250}
                      width={370}
                    />
                  </a>
                  <div className="flex w-full justify-evenly px-3 my-3  font-semibold">
                    <a href={data.gitRepoLink}>
                      <p>View Code</p>
                    </a>

                    {data.deployedLink && (
                      <a href={data.deployedLink}>
                        <p>Visit</p>
                      </a>
                    )}
                  </div>
                  <div>
                    <p className="max-w-sm text-center p-4">
                      {data.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-10">
          <Link href="https://www.khushcodezz.com/my-apps">
            <p className="text-5xl underline cursor-pointer tracking-widest font-bold text-pink-400 text-center">
              Wanna See More?
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
