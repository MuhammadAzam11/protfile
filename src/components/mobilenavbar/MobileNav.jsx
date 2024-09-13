import React from 'react'
import './MobileNav.css';


const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`monile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                
            <div className='mobile-menu-contanier'>
            <h4>Developing is my Fashion</h4>


                    <ul>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item'>Education</a>
                        </li>
                        <li>
                            <a className='menu-item'>Contact </a>
                        </li>
                        <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
                    </ul>
                    
                </div>
              
            </div>
        </>
    )
}

export default MobileNav