const Dropdown = () => {
  return (
    <div className="w-full xl:hidden  bg-white ">
      <ul className="flex pl-4 space-y-3 flex-col font-semibold">
        <a href="#services">
          <li className="cursor-pointer">Services</li>
        </a>
        <a href="#exp">
          <li className="cursor-pointer">Experience</li>
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
