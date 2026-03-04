import React from 'react'
import logo from '../assets/logo.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <div
            className="Footer relative flex flex-col items-center justify-center gap-8 py-12"
            style={{ background: 'var(--appColor)' }}
        >
            {/* Orange blur blobs */}
            <div
                className="absolute"
                style={{
                    width: '26rem',
                    height: '12rem',
                    background: 'var(--orange)',
                    filter: 'blur(200px)',
                    borderRadius: '50%',
                    top: 0,
                    left: '15%',
                    zIndex: 0,
                }}
            />
            <div
                className="absolute"
                style={{
                    width: '26rem',
                    height: '12rem',
                    background: 'var(--orange)',
                    filter: 'blur(200px)',
                    borderRadius: '50%',
                    top: 0,
                    right: '15%',
                    zIndex: 0,
                }}
            />

            {/* Social Icons */}
            <div className="relative flex gap-8 z-10">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <img src={github} alt="GitHub" className="w-10 h-10 cursor-pointer" style={{ filter: 'invert(1)' }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="Instagram" className="w-10 h-10 cursor-pointer" style={{ filter: 'invert(1)' }} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-10 h-10 cursor-pointer" style={{ filter: 'invert(1)' }} />
                </a>
            </div>

            {/* Logo */}
            <div className="relative z-10">
                <img src={logo} alt="FitClub Logo" className="w-40" />
            </div>

            {/* Copyright */}
            <p className="relative z-10 text-gray-400 text-sm">
                © {new Date().getFullYear()} FitClub. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
