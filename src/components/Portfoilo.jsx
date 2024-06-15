import React from 'react'
import { Link } from 'react-scroll';


const Portfoilo = () => {
  return (
    <div id='Portfolio'>
      <div className="projects bg-black flex justify-center items-center flex-col p-4">
        <div className='flex items-center gap-2 justify-center p-4'>
          <div className='bg-orange-700 w-5 h-1 rounded-lg'></div>
          <span className='text-white text-2xl font-bold '>Portfolio</span>
        </div>
        <div className='flex items-center gap-4 justify-between mx-8'>
          <div className='flex flex-col items-center'>
            <img className='m-2 border-2 border-white w-[20vw] h-[50vh] overflow-hidden' src="src/assets/orange.jpg" alt="" />
            <img className='m-2 border-2 border-white w-[30vw] h-[40vh] overflow-hidden' src="src/assets/beautiful-woman-.jpg" alt="" />
          </div>
          <div className='flex flex-col items-center'>
            <img className='m-2 border-2 border-white w-[50vw] h-[40vh] overflow-hidden' src="src/assets/banner_.jpg" alt="" />
            <img className='m-2 border-2 border-white w-[30vw] h-[50vh] overflow-hidden' src="src/assets/post_3_skin_care.jpg" alt="" />
          </div>
          <div className='flex flex-col items-center'>
            <img className='m-2 border-2 border-white w-[30vw] h-[40vh] overflow-hidden' src="src/assets/lakme.jpg" alt="" />
            <img className='m-2 border-2 border-white w-[30vw] h-[40vh] overflow-hidden' src="src/assets/firestick.jpg" alt="" />
          </div>
        </div></div>
      <div className='w-full h-1 bg-zinc-600'></div>
    </div>
  )
}

export default Portfoilo
