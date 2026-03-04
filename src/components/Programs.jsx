import React from 'react'
import { programsData } from '../data/programsData.jsx'
import rightArrow from '../assets/rightArrow.png'

function Programs() {
  return (
    <div className="Programs flex flex-col gap-8 py-12 px-8" style={{ background: 'var(--appColor)' }}>
      {/* Header */}
      <div className="programs-header flex gap-4 lg:gap-8 uppercase text-3xl sm:text-4xl lg:text-5xl font-bold justify-center text-white">
        <span className="stroke-text">Explore Our</span>
        <span> Programs</span>
        <span className="stroke-text">to Shape</span>
        <span> You</span>
      </div>

      {/* Programs Cards */}
      <div className="program-categories flex gap-6 justify-center flex-wrap mt-8">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="category flex flex-col gap-4 p-8 rounded-sm cursor-pointer"
            style={{
              background: 'var(--darkGrey)',
              color: 'white',
              flex: '1 1 200px',
              maxWidth: '260px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--planCard)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--darkGrey)')}
          >
            <span className="w-10 h-10 fill-white" style={{ fill: 'white' }}>
              {program.image}
            </span>
            <span className="text-xl font-bold uppercase">{program.heading}</span>
            <span className="text-base" style={{ color: 'var(--lightgray)' }}>{program.details}</span>
            <div className="flex gap-2 items-center cursor-pointer">
              <span className="text-sm font-semibold">Join Now</span>
              <img src={rightArrow} alt="→" className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
