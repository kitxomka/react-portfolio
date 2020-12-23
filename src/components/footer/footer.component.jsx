import React from 'react'

import './footer.style.css'

const Footer = () => {
    return (
        <>
            <div className="py-2 text-center footer-style">
                © ALONA SHOT &nbsp; {new Date().getFullYear()}
            </div>
        </>
    )
}

export default Footer


