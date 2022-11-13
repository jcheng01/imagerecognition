import React from 'react'
import Tilt from 'react-parallax-tilt';
import { SiReactrouter } from 'react-icons/si'
import "./logo.css"

const Logo = () => {
    return (
        <div>

            <Tilt className='icon'>
                <SiReactrouter className='brainIcon' size={90} />
            </Tilt>

        </div>
    )
}

export default Logo