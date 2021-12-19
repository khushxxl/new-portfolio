import { MenuIcon } from '@heroicons/react/solid'
const Navbar = () => {
  return (
    <div className="h-[10vh] top-0  p-4 sticky w-full justify-between xl:justify-evenly flex items-center text-black bg-gray-50 ">
      <div>
        <p className="text-xl font-bold">Khushaal Choithramani</p>
      </div>
      <div className="hidden  xl:inline-flex ">
        <ul className="flex space-x-10 font-semibold">
          <li>Services</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="hidden xl:inline-flex">
        <p className="font-semibold text-sm ">Work together? </p>
      </div>
      <div className="xl:hidden">
        <MenuIcon className="h-8 w-8 text-black " />
      </div>
    </div>
  )
}

export default Navbar
