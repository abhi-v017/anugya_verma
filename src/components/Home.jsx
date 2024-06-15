import React from 'react'
import Typed from "typed.js";

import { Link } from 'react-scroll';

import { useEffect, useRef } from "react";


const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Graphic Designer", "Photo Editor", "Illustration Artist"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (

    <div>
      <div className="bg-[url('src/assets/bgimg.jpg')] bg-no-repeat h-[95vh] bg-cover">
        <nav className='bg-black opacity-90 flex justify-between items-center'>
          <div></div>
          <ul className='text-white flex justify-center items-center gap-4 p-3'>
            <li className='px-4 py-2 hover:bg-zinc-700 rounded-3xl cursor-pointer font-bold text-md'><Link to="" smooth={true} duration={500}>Home</Link></li>
            <li className='px-4 py-2 hover:bg-zinc-700 rounded-3xl cursor-pointer font-bold text-md'><Link to="About" smooth={true} duration={500}>About</Link></li>
            <li className='px-4 py-2 hover:bg-zinc-700 rounded-3xl cursor-pointer font-bold text-md'><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></li>
            <li className='px-4 py-2 hover:bg-zinc-700 rounded-3xl cursor-pointer font-bold text-md'><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
        <div className="section1 flex items-center justify-center gap-20 bg-black opacity-90 h-[88.6vh]">
          <img className='mx-10 rounded-3xl contrast-150 shadow-lg saturate-150' width={300} src="src/assets/portimg.jpg" alt="" />
          <div className="content mx-10 px-20">
            <span className='text-white fontstyle1'>Hello, My Name is</span>
            <h1 className='text-orange-700 fontstyle2 italic'>Anugya Verma</h1>
            <div className='flex items-center gap-2'>
              <div className='bg-orange-700 w-5 h-1 rounded-lg'></div>
              <span className='text-white text-xl font-extralight'>A Creative <span className='text-orange-700 font-bold' ref={el}></span></span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-1 bg-zinc-600'></div>
    </div>
  )
}

export default Home
