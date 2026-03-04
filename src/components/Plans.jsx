import React from 'react'
import { plansData } from '../data/plansData.jsx'
import whiteTick from '../assets/whiteTick.png'

function Plans() {
    return (
        <div
            className="Plans flex flex-col gap-8 py-16 px-8 relative"
            style={{ background: 'var(--appColor)' }}
        >
            {/* Blobs */}
            <div
                className="absolute"
                style={{
                    width: '23rem',
                    height: '23rem',
                    borderRadius: '50%',
                    background: 'var(--orange)',
                    filter: 'blur(150px)',
                    top: '6rem',
                    left: '0',
                    zIndex: 0,
                }}
            />
            <div
                className="absolute"
                style={{
                    width: '23rem',
                    height: '23rem',
                    borderRadius: '50%',
                    background: 'var(--orange)',
                    filter: 'blur(150px)',
                    top: '10rem',
                    right: '0',
                    zIndex: 0,
                }}
            />

            {/* Header */}
            <div className="relative flex gap-4 lg:gap-8 uppercase text-3xl sm:text-4xl md:text-5xl font-bold justify-center text-white z-10">
                <span className="stroke-text">Ready To Start</span>
                <span> Your Journey</span>
                <span className="stroke-text">Now WithUs</span>
            </div>

            {/* Plans */}
            <div className="relative flex gap-8 justify-center flex-wrap mt-4 z-10">
                {plansData.map((plan, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-sm p-8 gap-6"
                        style={{
                            background: index === 1 ? 'var(--planCard)' : 'var(--caloryCard)',
                            color: 'white',
                            flex: '1 1 220px',
                            maxWidth: '280px',
                        }}
                    >
                        {/* Icon */}
                        <div
                            style={{ fill: index === 1 ? 'white' : 'var(--orange)' }}
                            className="w-10 h-10"
                        >
                            {plan.icon}
                        </div>

                        {/* Name & Price */}
                        <span className="text-xl font-bold">{plan.name}</span>
                        <span className="text-4xl font-bold">$ {plan.price}</span>

                        {/* Features */}
                        <div className="flex flex-col gap-2">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-base">
                                    <img src={whiteTick} alt="✓" className="w-4 h-4" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <span className="text-sm text-gray-300">See more benefits →</span>
                            <button
                                className="w-full py-3 font-bold uppercase cursor-pointer"
                                style={{
                                    border: '3px solid white',
                                    background: 'transparent',
                                    color: 'white',
                                    transition: 'all 0.3s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'white'
                                    e.currentTarget.style.color = 'var(--orange)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'transparent'
                                    e.currentTarget.style.color = 'white'
                                }}
                            >
                                Join Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
