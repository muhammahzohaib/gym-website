import React, { useState } from 'react'
import { testimonialsData } from '../data/testimonialsData.jsx'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'

function Testimonials() {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div
            className="Testimonials flex gap-0 py-16 px-8"
            style={{ background: 'var(--appColor)' }}
        >
            {/* Left Side */}
            <div className="left-t flex flex-1 flex-col gap-4 uppercase text-white" style={{ flex: 1 }}>
                <span className="text-orange-400 font-bold text-lg" style={{ color: 'var(--orange)' }}>
                    Testimonials
                </span>
                <span className="stroke-text text-3xl sm:text-4xl font-bold">What They</span>
                <span className="text-3xl sm:text-4xl font-bold">Say About Us</span>
                <p className="mt-2 text-sm sm:text-base capitalize font-light leading-relaxed" style={{ color: 'var(--lightgray)', maxWidth: '400px' }}>
                    {testimonialsData[selected]?.review}
                </p>
                <span className="font-bold text-lg" style={{ color: 'var(--orange)' }}>
                    {testimonialsData[selected]?.name}
                </span>
                <span style={{ color: 'var(--lightgray)' }}>
                    – {testimonialsData[selected]?.status}
                </span>

                {/* Arrows */}
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => setSelected(selected === 0 ? tLength - 1 : selected - 1)}
                        className="w-12 h-12 flex items-center justify-center cursor-pointer"
                        style={{ border: '2px solid var(--orange)', background: 'transparent' }}
                    >
                        <img src={leftArrow} alt="← Prev" className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setSelected((selected + 1) % tLength)}
                        className="w-12 h-12 flex items-center justify-center cursor-pointer"
                        style={{ border: '2px solid var(--orange)', background: 'transparent' }}
                    >
                        <img src={rightArrow} alt="→ Next" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="right-t relative" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
                <div
                    className="absolute"
                    style={{
                        width: '14rem',
                        height: '17rem',
                        border: '2px solid var(--orange)',
                        top: '0.9rem',
                        right: '7rem',
                    }}
                />
                <div
                    className="absolute"
                    style={{
                        width: '14rem',
                        height: '16rem',
                        background: 'var(--planCard)',
                        top: '3rem',
                        right: '5rem',
                    }}
                />
                <img
                    src={testimonialsData[selected]?.image}
                    alt={testimonialsData[selected]?.name}
                    className="absolute"
                    style={{
                        width: '14rem',
                        height: '17rem',
                        objectFit: 'cover',
                        top: '2rem',
                        right: '6rem',
                        filter: 'grayscale(20%)',
                        transition: 'all 0.3s ease',
                    }}
                />
            </div>
        </div>
    )
}

export default Testimonials
