import { about } from '../data'

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#03001E]   flex flex-col items-center justify-start"
    >
      <p className="text-white  text-center xl:text-center tracking-wider font-bold text-5xl mt-24">
        About Me
      </p>
      <div className="mt-10 flex flex-col xl:flex-row justify-between max-w-6xl w-full items-center xl:items-start">
        {/* Left  */}
        <div className="grid grid-cols-1 max-w-sm lg:grid-cols-2 lg:max-w-xl xl:max-w-3xl gap-x-12 gap-y-20">
          {about.map((data) => {
            return (
              <div className="bg-[#1E1535] transition-all duration-150 xl:hover:border-2 xl:hover:border-white xl:hover:scale-105 space-x-5 p-5 rounded-xl flex flex-col items-center justify-center text-white">
                <p className="text-2xl font-bold tracking-wider">
                  {data.title}
                </p>
                <p className="text-center mt-2 text-gray-300 font-semibold text-lg">
                  {data.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Right  */}
        <div>
          <img
            src="https://i.ibb.co/DbGf44r/IMG-4477.png"
            alt=""
            className="h-[300px] w-[300px]"
          />
        </div>
      </div>
      <div>
        <p className="text-center text-white text-4xl tracking-widest mt-10 font-bold mb-14">
          Find it interesting ?
          <br />
          <a
            href="https://www.linkedin.com/in/khushaal-choithramani-250285208/"
            className="underline"
          >
            Let's Connect ⚡️
          </a>
        </p>
      </div>
    </div>
  )
}

export default About
