import React from 'react'
import { myApps, myWebsites } from '../data'
import Navbar from './Navbar'

const MyAppComponent = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-900  w-full flex flex-col items-center justify-center ">
      <a href="https://www.khushcodezz.com/">
        <h1 className=" mt-10 underline cursor-pointer tracking-wider  text-4xl text-center font-bold text-white">
          KHUSHAAL CHOITHRAMANI
        </h1>
      </a>

      <h1 className=" mt-5 text-4xl text-center font-bold text-white">
        Best of My Apps & Websites
      </h1>
      <div className="grid grid-cols-1 w-full lg:grid-cols-2 items-start place-items-center mt-12 text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-wider">Apps</h1>
          {myApps.map((data) => (
            <div
              key={data.title}
              className="bg-[#1F1535] text-white max-w-sm w-full mt-5 p-4 rounded-lg space-y-5 flex flex-col justify-center items-start"
            >
              <p className=" text-xl font-bold">🚀 {data.title}</p>
              <p className="font-semibold">⚡️ {data.subtite}</p>
              {data.function && <p>💡Features: {data.function}</p>}
              <a href={data.github}>
                <div className="p-2 rounded-xl cursor-pointer bg-white text-black max-w-xs flex items-center justify-center">
                  <p className="font-bold">View Code</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold mt-10 lg:mt-0 tracking-wider">
            Websites
          </h1>
          {myWebsites.map((data) => (
            <div
              key={data.title}
              className="bg-[#1F1535] text-white max-w-sm w-full mt-5 p-4 rounded-lg space-y-5 flex flex-col justify-center items-start"
            >
              <p className=" text-xl font-bold">🚀 {data.title}</p>
              <p className="font-semibold">⚡️ {data.subtite}</p>
              <p>💡Features: {data.function}</p>
              <div className="flex space-x-10">
                <a href={data.github}>
                  <div className="p-2 rounded-xl cursor-pointer bg-white text-black max-w-xs flex items-center justify-center">
                    <p className="font-bold">View Code</p>
                  </div>
                </a>

                <a href={data.view}>
                  <div className="p-2 rounded-xl cursor-pointer bg-white text-black max-w-xs flex items-center justify-center">
                    <p className="font-bold">Visit</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyAppComponent
