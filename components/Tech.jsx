import Image from 'next/image'
import React from 'react'

const Tech = () => {
  return (
    <div className="bg-[#03001E]  flex flex-col items-center justify-center ">
      <p className="text-white font-style-4 text-center xl:text-center tracking-wider flex flex-col items-center justify-center font-bold text-5xl mt-24">
        Tech I Work With 🧑‍💻
      </p>

      <div className="flex items-center">
        <Image src={require('../images/react.png')} height={300} />
        <Image
          src={require('../images/firebase.png')}
          height={300}
          width={50}
        />
      </div>
    </div>
  )
}

export default Tech
