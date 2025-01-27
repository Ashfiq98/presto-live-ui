import React from 'react'

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav>
            <div className='logo-img'>
                <img src="Frame 11.png" alt="" />
            </div>
            <div className='user-info'>
                <div className="notification">

                    <img src="notification.svg" width='24px' height='24px' alt="" />
                </div>
                <div className="user-image">
                    <img src="user.png" alt="" />
                </div>
            </div>
        </nav>
    )
}