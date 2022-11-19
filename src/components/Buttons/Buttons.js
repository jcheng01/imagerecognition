import React from 'react'
import "./Buttons.scss"
import { FcAddImage } from 'react-icons/fc'
import { GiBrain } from 'react-icons/gi'

export default function Buttons(props) {
    return (
        <div>
            <p>
                This Magic brain will interpret the pictures using machine learning.
                <br></br>
                Give it a try.
            </p>
            <div className='btn'>
                <button onClick={props.img}>
                    <FcAddImage size={30} />
                </button>
                <button onClick={props.ai}>
                    <GiBrain size={30} color='#004EEB' />
                </button>
            </div>
        </div>
    )
}