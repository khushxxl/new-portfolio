import { businessData, workDone } from '../data'

const Testimonials = () => {
  return (
    <div className="bg-[#03001E] flex flex-col items-center justify-center ">
      <div className="shadow-xl">
        <p className="text-white  text-center xl:text-center font-bold text-5xl mt-12">
          Work Experience
        </p>
        <div>
          <div className="flex flex-col items-center mt-20 justify-center space-y-20 xl:space-y-0 xl:flex-row xl:space-x-14 text-white">
            {workDone.map((data) => {
              return (
                <div className="relative cursor-pointer max-w-md transition-all hover:scale-105">
                  <div className="absolute -inset-0.5  bg-gradient-to-r from-yellow-300 to-yellow-800 rounded-2xl blur "></div>
                  <div
                    key={data.id}
                    className="bg-[#1E1535] text-left relative space-y-4 max-w-sm    min-w-max p-4 rounded-lg"
                  >
                    <div className="flex items-start flex-col ">
                      <p className="text-xl  font-semibold tracking-wide text-left">
                        {data.name}
                      </p>
                      <p className="text-gray-300">My Role: {data.role}</p>
                    </div>

                    <p className="max-w-xs xl:max-w-sm mt-10">{data.about}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* <div className="flex items-center justify-center">
          <img
            src="https://i.ibb.co/19j7J8Q/testimonial-01.jpg"
            alt=""
            className="h-[300px] w-[300px]"
          />
        </div> */}
      </div>
    </div>
  )
}

export default Testimonials
