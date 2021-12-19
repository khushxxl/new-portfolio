const Connect = () => {
  return (
    <div
      id="contact"
      className=" bg-purple-900 h-[70vh]  flex flex-col text-center justify-center items-center"
    >
      <div>
        <p className="text-white text-[4rem] tracking-widest font-bold">
          Let's Work Together!
        </p>
      </div>
      <div className="text-white hover:bg-[#A167D8] cursor-pointer hover:shadow-2xl rounded-full text-center mt-4 p-4">
        <p className="text-2xl  text-center">Contact Me {'>'}</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-center text-center space-x-20  mt-20 text-white font-semibold text-xl">
        <div className="hover:text-blue-400 cursor-pointer">
          <a href="https://www.linkedin.com/in/khushaal-choithramani-250285208/">
            LinkedIn
          </a>
        </div>
        <div className="hover:text-blue-400 cursor-pointer">
          <a href="https://twitter.com/khushaal_04">Twitter</a>
        </div>
        <div className="hover:text-blue-400 cursor-pointer">
          <a href="https://www.instagram.com/khush.codes/"> Instagram</a>
        </div>
        <div className="hover:text-blue-400 cursor-pointer">
          <a href="mailto:khushaal.choithramani@gmail.com">Email</a>
        </div>
      </div>
    </div>
  )
}

export default Connect
