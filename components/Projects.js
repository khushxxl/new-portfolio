import { projectData } from '../data'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ExternalLinkIcon, HeartIcon } from '@heroicons/react/outline'

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
        <p className="text-white font-style-4   text-center xl:text-center tracking-wider flex flex-col items-center justify-center font-bold text-5xl mt-24">
          Awesome Projects ✨
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 w-full  gap-x-20 gap-y-10 items-center place-items-center ">
          {projectData.map((data) => {
            return (
              <motion.div
                // variants={profileVarient}
                // ref={ref}
                // animate={control}
                className="relative cursor-pointer items-start max-w-md transition-all xl:hover:scale-105 duration-150 text-white rounded-2xl"
              >
                {/* <div className="absolute -inset-0.5  bg-gradient-to-b from-red-200 to-red-800 rounded-2xl blur "></div> */}
                <div className="  w-fit relative text-white rounded-xl  flex flex-col items-center justify-center">
                  <a href={data.deployedLink} target="_blank">
                    <Image
                      src={data.image}
                      alt={`${data.name}'s image`}
                      className=" rounded-xl cursor-pointer border-2 border-yellow-300 "
                      height={250}
                      width={350}
                    />
                  </a>
                </div>
                <div className="space-y-2  ">
                  <p className="tracking-widest font-custom-font-1 font-semibold text-xl ">
                    {data.name}
                  </p>

                  <div>
                    <p className="max-w-sm text-left">{data.description}</p>
                  </div>

                  <div className="flex p-1 border-2 border-yellow-300 rounded-full  justify-center items-center font-semibold space-x-5 bg-white w-fit ">
                    <a href={data.gitRepoLink} target="_blank">
                      <Image
                        src={require('../images/github.png')}
                        height={20}
                        width={20}
                        className="cursor-pointer"
                      />
                    </a>

                    {data.deployedLink && (
                      <a href={data.deployedLink} target="_blank">
                        <ExternalLinkIcon className="hover:text-blue-300 -mt-1 text-black h-5 w-5 " />
                      </a>
                    )}
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
