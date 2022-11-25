import Image from 'next/image'

const Connect = () => {
  return (
    <div
      id="contact"
      className=" bg-purple-900 h-[70vh]  flex flex-col text-center justify-center items-center"
    >
      <div>
        <p className="text-white text-[3rem] font-custom-font-1 font-bold">
          Let's Work Together!
        </p>
      </div>
      <div className="text-white hover:bg-[#A167D8] cursor-pointer hover:shadow-2xl rounded-full text-center mt-4 p-4">
        <p className="text-2xl  text-center">Contact Me {'>'}</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-center text-center lg:space-x-10 xl:space-x-20  mt-8 text-white font-semibold text-xl">
        <div className="hover:text-blue-400 cursor-pointer">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/khushaal-choithramani-250285208/"
          >
            <Image
              src={require('../images/Llogo.png')}
              height={100}
              width={100}
            />
          </a>
        </div>
        <div className="hover:text-blue-400 cursor-pointer">
          <a target="_blank" href="https://twitter.com/khushaal_04">
            <Image
              src={require('../images/twitter.png')}
              height={100}
              width={100}
            />
          </a>
        </div>
        <div className="hover:text-blue-400 cursor-pointer">
          <a target="_blank" href="https://github.com/khushxxl">
            <Image
              src={require('../images/github.png')}
              height={100}
              width={100}
            />
          </a>
        </div>
        <div className="hover:text-blue-400 cursor-pointer">
          <a target="_blank" href="mailto:khushaal.choithramani@gmail.com">
            <Image
              src={require('../images/gmail.png')}
              height={100}
              width={100}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Connect
