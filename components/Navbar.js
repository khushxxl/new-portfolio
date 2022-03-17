import { MenuIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Dropdown from './Dropdown'
const Navbar = () => {
  const [drop, setDrop] = useState(false)
  return (
    <nav className="flex flex-col z-50 top-0 sticky">
      <div className="h-[10vh]  p-4  w-full justify-between xl:justify-evenly flex items-center text-black bg-gray-50 ">
        <div>
          <p className="text-2xl font-bold cursor-pointer">
            <a href="#hero">Khushaal Choithramani</a>
          </p>
        </div>
        <div className="hidden  xl:inline-flex ">
          <ul className="flex space-x-6 font-semibold">
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
            <a href="#contact ">
              <li className="cursor-pointer">Contact</li>
            </a>
          </ul>
        </div>
        <div className="hidden xl:inline-flex">
          <p className="font-semibold text-sm cursor-pointer ">
            <a href="#contact">Work together? </a>
          </p>
        </div>
        <div className="xl:hidden">
          <MenuIcon
            className="h-8 w-8 text-black cursor-pointer "
            onClick={() => {
              if (drop == false) {
                setDrop(true)
              } else {
                setDrop(false)
              }
            }}
          />
        </div>
      </div>

      {drop && <Dropdown />}
    </nav>
  )
}

export default Navbar
