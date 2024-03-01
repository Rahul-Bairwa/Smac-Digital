import { FaPhoneVolume } from 'react-icons/fa';
import logo from '../assets/logo_2.png'
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {
    const navItems: string[] = ["Home", "About Us", "Services", "Portfolio", "Testimonials", "Blog", "Contact Us", "Career"];
    const [navBgColor, setNavBgColor] = useState(false)
    const changeBgColor=()=>{
        if(window.scrollY>=7){
            setNavBgColor(true)
        }   
        else{
            setNavBgColor(false)
        } 
    }
window.addEventListener('scroll',changeBgColor)
    return (
        <nav className={navBgColor?'active-nav':''}>
            <div  className="nav-section" >
                <img src={logo} alt="" />
                {
                    navItems.map(e => <li >{e}</li>)
                }
                <button><FaPhoneVolume /><span>Let's Talk!</span><AiFillCaretDown />
                </button>
            </div>
        </nav>
    )
}

export default Navbar