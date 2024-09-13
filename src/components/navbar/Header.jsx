import React, { useState } from 'react'
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from '../mobilenavbar/MobileNav';
const Header = () => {
    const[openMenu,setOpenMenu]=useState(false);
    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    };
    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'> 
            <h4>Developing is my Fashion</h4>

                <div className='nav-content'>
                    <ul>
                        <li>
                            <a href='#home' className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href='#skills' className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href='#Education'  className='menu-item'>Education</a>
                        </li>
                        <li>
                            <a  href='#contact' className='menu-item'>Contact </a>
                        </li>
                        {/* <button className='contact-btn' onClick={()=>{}}>Hire Me</button> */}
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                       <MenuIcon/>
                       {openMenu}
                    </button>
                </div>

            </nav>
        </>
    )
}

export default Header