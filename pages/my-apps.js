import React from 'react'
import Connect from '../components/Connect'
import MyAppComponent from '../components/MyAppComponent'
import Navbar from '../components/Navbar'

const MyApps = () => {
  return (
    <div className="">
      {/* <Navbar /> */}

      <MyAppComponent />
      <Connect />
    </div>
  )
}

export default MyApps
