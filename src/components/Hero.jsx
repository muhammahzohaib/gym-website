import React from 'react'
import Header from './Header'
import '../App.css'
import heart from '../assets/heart.png'
import hero_image from '../assets/hero_image.png'
import hero_black from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'
import Programs from './Programs'
function Hero() {
  return (
    <div className="Hero flex flex-col lg:flex-row justify-between w-full min-h-screen relative overflow-hidden" style={{ background: 'var(--appColor)' }}>
      <div className="left-h p-6 lg:p-8 flex flex-col gap-10 lg:flex-[3] z-10">
        <Header />
        {/* The Best  */}
        <div className="best-ad mt-12 bg-[#23272b] rounded-full text-white w-fit uppercase p-3 px-5 relative flex items-center justify-start text-base sm:text-lg font-medium">
          <div className='absolute bg-[#f48915] w-20 h-full left-0 rounded-full z-0'></div>
          <span className='z-10 tracking-widest ml-4'>The best Fitness Club In The Town</span>
        </div>


        {/* Shape text  */}
        <div className='Hero-Section mt-12 flex flex-col gap-4 uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none'>
          <div>
            <span className='stroke-text tracking-tight'>Shape </span>
            <span className="tracking-tight">Your</span>
          </div>
          <div>
            <span className="tracking-tight">Ideal Body</span>
          </div>
          <div>
            <span className='text-base sm:text-lg normal-case tracking-wide font-light max-w-lg mt-4 text-gray-300'>In here we will help you to shape and build your ideal body and live your life to the fullest.</span>
          </div>
        </div>



        <div className='flex gap-10 mt-6'>
          <div className='flex flex-col'> <span className='text-white text-3xl font-bold'>+ 140</span> <span className='text-gray-400 text-xs sm:text-sm uppercase tracking-widest'>Expert Coaches</span> </div>
          <div className='flex flex-col'> <span className='text-white text-3xl font-bold'>+ 978</span> <span className='text-gray-400 text-xs sm:text-sm uppercase tracking-widest'>Members Joined</span> </div>
          <div className='flex flex-col'> <span className='text-white text-3xl font-bold'>+ 50</span> <span className='text-gray-400 text-xs sm:text-sm uppercase tracking-widest'>Programs</span> </div>
        </div>




        {/* button  */}
        <div className='flex gap-6 mt-8'>
          <button className='bg-[#f48915] text-white px-8 py-3 text-lg font-bold hover:bg-white hover:text-[#f48915] transition duration-300 shadow-lg'> Get Started </button>
          <button className='bg-transparent text-white px-8 py-3 text-lg font-bold border-2 border-[#f48915] hover:bg-[#f48915] transition duration-300'> Learn More</button>
        </div>
      </div>



      <div className="right-h relative lg:flex-1 min-h-[500px] lg:min-h-full flex items-center justify-center bg-none lg:bg-[#f48915]">
        <button className='hidden lg:block bg-white absolute right-10 top-10 px-6 py-2 text-lg text-black font-bold hover:bg-gray-100 transition duration-300 shadow-md'> Join Now </button>

        <div className='flex flex-col gap-2 bg-[#464D53] p-4 items-center rounded-lg absolute right-8 top-16 lg:top-24 w-fit transition-transform hover:scale-105 z-20 shadow-xl border border-gray-600'>
          <img className='w-6 h-6' src={heart} alt="HR" />
          <span className='text-gray-400 text-sm font-medium'>Heart Rate</span>
          <span className='text-white text-xl font-bold'>116 bpm</span>
        </div>

        <img className='absolute right-4 lg:right-12 bottom-12 lg:bottom-16 w-[20rem] lg:w-[28rem] z-10 drop-shadow-2xl' src={hero_image} alt="Athlete" />
        <img className='absolute right-0 top-12 lg:right-40 lg:top-24 w-[14rem] lg:w-[20rem] -z-0 opacity-40 lg:opacity-80' src={hero_black} alt="Back" />

        {/* callerio section  */}

        <div className="calories flex gap-4 w-fit bg-[#656565] rounded-lg p-4 absolute bottom-8 left-8 lg:bottom-24 lg:-left-16 z-20 transition-transform hover:scale-105 shadow-2xl border border-gray-600">
          <img src={Calories} className='w-10 h-10' alt="Cal" />
          <div className='flex flex-col justify-between'>
            <span className='text-gray-300 text-xs font-medium'>Calories Burned</span>
            <span className='text-white text-xl font-bold'>220 Kcal</span>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Hero
