import Image from 'next/image'
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300  to-blue-900  h-screen w-full flex flex-col items-center justify-start ">
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
        <img
          src="https://pbs.twimg.com/profile_images/1458835398319218703/oX3WAyP-_400x400.jpg"
          alt=""
          className="h-52 w-52 rounded-full border-4 border-white relative"
        />
      </div>

      <div className="mt-10">
        <p className="text-4xl tracking-[0.2rem] text-transparent bg-clip-text bg-gradient-to-br from-white  to-blue-200 font-extrabold text-center">
          Freelance App & Web Developer
        </p>
        <p className="text-center mt-2 text-2xl font-bold tracking-widest text-gray-300">
          Based in Mumbai , India
        </p>
        <p className="mt-2 text-center text-white font-bold tracking-widest">
          Let's work together? {'>'}
        </p>
      </div>
    </div>
  )
}

export default Hero
