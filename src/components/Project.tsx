import React, { useRef } from 'react'

const Project: React.FC = ({ e }) => {
    const titlePopup = useRef<HTMLDivElement>(null);

    const upTitle = () => {
        if (titlePopup.current) {
            titlePopup.current.classList.add('animate'); // Add a CSS class to trigger animation
        }
    };

    const resetAnimation = () => {
        if (titlePopup.current) {
            titlePopup.current.classList.remove('animate'); // Remove the CSS class to reset animation
        }
    };
    return (
        <>
            <div className='project-card' onMouseEnter={upTitle} onMouseLeave={resetAnimation}>
                <img src={e.img} alt="" />
                <div ref={titlePopup}>{e.title}</div>
            </div>
        </>
    )
}

export default Project
