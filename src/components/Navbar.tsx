import { FaPhoneVolume } from 'react-icons/fa';
import logo from '../assets/logo_2.png'
import { AiFillCaretDown } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { navItems, heads } from '../data'
const Navbar = () => {
    const popUpVisibility = useRef();
    const buttonBg = useRef();
    const [navBgColor, setNavBgColor] = useState(false)
    const changeBgColor = () => {
        if (window.scrollY >= 7) {
            setNavBgColor(true)
        }
        else {
            setNavBgColor(false)
        }
    }
    window.addEventListener('scroll', changeBgColor)
    const showPopUp = () => {
        
        if (popUpVisibility.current.style.display === "block"   || buttonBg.current.style.backgroundColor==='#red') {
            popUpVisibility.current.style.display = "none"
            buttonBg.current.style.backgroundColor="#004500"
            setTimeout(()=>{
                buttonBg.current.style.backgroundColor="#ffffff"
            },100)
        } else {
            popUpVisibility.current.style.display = "block"
            buttonBg.current.style.backgroundColor="#004500"
            setTimeout(()=>{
                buttonBg.current.style.backgroundColor="#ffffff"
            },100)
        }
    }
    return (
        <>
            <nav className={navBgColor ? 'active-nav' : ''}>
                <div className="nav-section" >
                    <img src={logo} alt="" />
                    {
                        navItems.map(e => <li >{e}</li>)
                    }
                    <button ref={buttonBg} onClick={showPopUp}><FaPhoneVolume /><span>Let's Talk!</span><AiFillCaretDown />
                    </button>
                </div>
            </nav>
            <div ref={popUpVisibility} className="lets-talk-pop-up" >
                {
                    heads.map(e =>
                        <div>
                            <h4 >{e.name}</h4>
                            <h5 style={{ fontStyle: 'italic', color: '#0060ff' }}>{e.office}</h5>
                            <a style={{ fontSize: ".8rem" }} href={`tel:${e.mobile}`}><FaPhoneVolume />{e.mobile}</a>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar