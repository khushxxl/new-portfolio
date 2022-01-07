import { projectData } from '../data'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#03001E]  flex flex-col items-center justify-start "
    >
      <div>
        <p className="text-white  text-center xl:text-center tracking-wider flex flex-col items-center justify-center font-bold text-5xl mt-24">
          Best Projects of Mine
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 w-full  gap-x-20 gap-y-10 items-center place-items-center ">
          {projectData.map((data) => {
            return (
              <div className="relative cursor-pointer max-w-md transition-all xl:hover:scale-105 duration-150 rounded-2xl">
                <div className="absolute -inset-0.5  bg-gradient-to-b from-red-200 to-red-800 rounded-2xl blur "></div>
                <div className="bg-[#1E1535] relative text-white rounded-2xl p-2 flex flex-col items-center justify-center">
                  <p className="tracking-wide font-semibold text-lg">
                    {data.name}
                  </p>
                  <a href={data.deployedLink}>
                    <Image
                      src={data.image}
                      alt={`${data.name}'s image`}
                      className="mt-2 rounded-xl cursor-pointer"
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
              </div>
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
    </div>
  )
}

export default Projects
