const Dropdown = () => {
  return (
    <div className="w-full xl:hidden shadow-2xl md:hidden list-none flex bg-white  justify-start items-end rounded-md  text-black animate-slide-in ">
      <ul className="flex pl-4 space-y-3 flex-col font-semibold">
        <a href="#services">
          <li className="cursor-pointer">Services</li>
        </a>
        <a href="#exp">
          <li className="cursor-pointer">Experience</li>
        </a>
        <a href="#testi">
          <li className="cursor-pointer">Testimonials</li>
        </a>
        <a href="#projects">
          <li className="cursor-pointer">Projects</li>
        </a>
        <a href="#about">
          <li className="cursor-pointer">About</li>
        </a>
        <a href="#contact">
          <li className="cursor-pointer mb-5">Contact</li>
        </a>
      </ul>
    </div>
  )
}

export default Dropdown
